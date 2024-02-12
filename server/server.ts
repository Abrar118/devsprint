import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";
import {
  UploadApiOptions,
  UploadApiResponse,
  v2 as cloudinary,
} from "cloudinary";
import {
  ChangeStreamDocument,
  Db,
  InsertOneResult,
  MongoClient,
  WithId,
} from "mongodb";
import brcypt from "bcrypt";

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

let db_instance: Db = response?.db(DATABASE) as Db;
