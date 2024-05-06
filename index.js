import express from "express";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const app = express();

// middlewares
app.use(
  cors({
    origin: ["http://localhost:8000", "http://localhosthost:5173"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //watch it
  res.header([
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-With, Content-Type, Accept",
  ]);
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/upload", express.static("uploads"));

// path
app.get("/", (req, res) => {
  res.json({ message: "welcome to webdev hell" });
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
