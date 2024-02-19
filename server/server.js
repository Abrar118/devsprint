"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var socket_io_1 = require("socket.io");
var http_1 = require("http");
var cloudinary_1 = require("cloudinary");
var mongodb_1 = require("mongodb");
var bcrypt_1 = require("bcrypt");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "20mb" }));
app.use(express_1.default.urlencoded({ limit: "20mb", extended: true }));
var server = http_1.default.createServer(app);
var io = new socket_io_1.Server(server, {
    cors: {
        // origin: "https://rhub-6bde5.web.app",
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    },
});
var ATLAS = process.env.ATLAS;
var DATABASE = process.env.DATABASE;
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true,
});
var cloudinaryOption = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
};
var response = await mongodb_1.MongoClient.connect(ATLAS).catch(function (err) {
    console.error(err);
});
var db_instance = response === null || response === void 0 ? void 0 : response.db(DATABASE);
var db = {
    users: db_instance.collection("users"),
    passwords: db_instance.collection("passwords"),
};
server.listen(process.env.PORT, function () {
    console.log("Server listening to port ".concat(process.env.PORT));
    console.log("Socket connected ");
});
app.get("/", function (req, res) {
    res.send("Hello World");
});
//user routes
app.get("/users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, find, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.query.userId;
                find = {};
                if (userId) {
                    find = { userId: userId };
                }
                return [4 /*yield*/, db.users.find(find).toArray()];
            case 1:
                users = _a.sent();
                res.status(200).json(users);
                return [2 /*return*/];
        }
    });
}); });
app.post("/users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, password, inserted, saltRounds, salt, hash, passCreated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.body;
                password = user.password;
                user.password = undefined;
                return [4 /*yield*/, db.users.insertOne(user).catch(function (err) {
                        res.status(403).json({ err: "Duplicate email" });
                    })];
            case 1:
                inserted = (_a.sent());
                if (!inserted.acknowledged) return [3 /*break*/, 5];
                saltRounds = Number(process.env.SALT);
                return [4 /*yield*/, bcrypt_1.default.genSalt(saltRounds)];
            case 2:
                salt = _a.sent();
                return [4 /*yield*/, bcrypt_1.default.hash(password, salt)];
            case 3:
                hash = _a.sent();
                return [4 /*yield*/, db.passwords
                        .insertOne({
                        userId: inserted.insertedId.toString(),
                        password: hash,
                        previousPassword: "",
                    })
                        .catch(function (err) {
                        db.users.deleteOne({ _id: inserted.insertedId });
                        res.status(500).json({ err: "Could not create user" });
                    })];
            case 4:
                passCreated = _a.sent();
                db.users.updateOne({ _id: inserted.insertedId }, { $set: { id: inserted.insertedId.toString() } });
                if (passCreated)
                    res.status(201).json(inserted);
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
app.post("/users/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, found, pass, match;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.body;
                return [4 /*yield*/, db.users.findOne({ email: user.email })];
            case 1:
                found = (_a.sent());
                if (!found) return [3 /*break*/, 4];
                return [4 /*yield*/, db.passwords.findOne({
                        userId: found.id,
                    })];
            case 2:
                pass = (_a.sent());
                return [4 /*yield*/, bcrypt_1.default.compare(user.password, pass.password)];
            case 3:
                match = _a.sent();
                if (match) {
                    res.status(200).json(found);
                }
                else {
                    res.status(401).json({ err: "Invalid credentials" });
                }
                return [3 /*break*/, 5];
            case 4:
                res.status(404).json({ err: "User not found" });
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
