import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import { UploadApiOptions, v2 as cloudinary } from "cloudinary";
import { Db, MongoClient } from "mongodb";
import brcypt from "bcrypt";
import User from "./models/user.js";
import Password from "./models/password.js";

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
};

server.listen(process.env.PORT, () => {
  console.log(`Server listening to port ${process.env.PORT}`);
  console.log("Socket connected ");
});

//user routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

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
  const result = await db.users.insertOne(user);
  res.status(201).json(result);
});
