import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import { UploadApiOptions, v2 as cloudinary } from "cloudinary";
import { Db, InsertOneResult, MongoClient, WithId } from "mongodb";
import bcrypt from "bcrypt";
import User from "./models/user.js";
import Password from "./models/password.js";
import Project from "./models/project.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    // origin: "https://rhub-6bde5.web.app",
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  },
});

const ATLAS = process.env.ATLAS as string;
const DATABASE = process.env.DATABASE as string;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

const cloudinaryOption: UploadApiOptions = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const response = await MongoClient.connect(ATLAS).catch((err) => {
  console.error(err);
});

const db_instance: Db = response?.db(DATABASE) as Db;
const db = {
  users: db_instance.collection<User>("users"),
  passwords: db_instance.collection<Password>("passwords"),
  projects: db_instance.collection<Project>("projects"),
};

server.listen(process.env.PORT, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
  console.log("Socket connected ");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

//user routes

app.get("/users", async (req, res) => {
  const userId = req.query.userId as string;
  let find = {};
  if (userId) {
    find = { userId: userId };
  }

  const users = await db.users.find(find).toArray();
  res.status(200).json(users);
});

app.post("/users", async (req, res) => {
  const user = req.body;
  const password = user.password;
  user.password = undefined;

  const inserted = (await db.users.insertOne(user).catch((err) => {
    res.status(400).json({ err: "Duplicate email" });
  })) as InsertOneResult<User>;

  if (inserted.acknowledged) {
    const saltRounds = Number(process.env.SALT);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const passCreated = await db.passwords
      .insertOne({
        userId: inserted.insertedId.toString(),
        password: hash,
        previousPassword: "",
      })
      .catch((err) => {
        db.users.deleteOne({ _id: inserted.insertedId });
        res.status(500).json({ err: "Could not create user" });
      });

    db.users.updateOne(
      { _id: inserted.insertedId },
      { $set: { id: inserted.insertedId.toString() } }
    );

    if (passCreated) res.status(201).json(inserted);
  }
});

app.post("/users/login", async (req, res) => {
  const user = req.body;
  const found = (await db.users.findOne({ email: user.email })) as WithId<User>;

  if (found) {
    const pass = (await db.passwords.findOne({
      userId: found.id,
    })) as WithId<Password>;
    const match = await bcrypt.compare(user.password, pass.password);

    if (match) {
      res.status(200).json(found);
    } else {
      res.status(401).json({ err: "Invalid credentials" });
    }
  } else {
    res.status(404).json({ err: "User not found" });
  }
});

app.patch("/users/:id", async (req, res) => {
  const user = req.body;
  const id = req.params.id;
  const updated = await db.users.updateOne({ id: id }, { $set: user });

  if (updated) {
    res.status(200).json(updated);
  } else {
    res.status(500).json({ err: "Could not update user" });
  }
});

app.patch("/users/:email/password", async (req, res) => {
  const user = req.body;
  const email = req.params.email;
  const found = (await db.users.findOne({ email: email })) as WithId<User>;

  if (found) {
    const saltRounds = Number(process.env.SALT);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(user.newPassword, salt);

    const oldPassword = (await db.passwords.findOne({
      userId: found.id,
    })) as WithId<Password>;

    const updated = await db.passwords.updateOne(
      { userId: found.id },
      { $set: { password: hash, previousPassword: oldPassword.password } }
    );

    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(500).json({ err: "Could not update password" });
    }
  } else {
    res.status(404).json({ err: "User not found" });
  }
});

app.post("/insertproject", async (req, res) => {
  const value = req.body;
  const data = await db.projects
    .insertOne(value)
    .catch(() => res.status(500).json("Could not insert data"));
  if (data) res.status(200).json(data);
});

app.get("/myprojectshow/:email", async (req, res) => {
  const email = req.params.email;
  const data = await db.projects
    .find({ members: email })
    .toArray()
    .catch(() => res.status(500).json("Could not show data"));
  if (data) res.status(200).json(data);
});
