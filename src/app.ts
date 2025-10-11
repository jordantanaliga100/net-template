// IMPORTS
import cors from "cors";
import express, { Request, Response } from "express";
import Error404 from "./middlewares/404";
import Exception from "./middlewares/Exception";

const app = express();

// TOP MIDDLEWARES
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", (req: Request, res: Response) => {
  // throw new Error("Testing gin index");
  res.send("Node_Express Server Alive 🛩️");
});

app.use("/api/v1/auth", () => {});
app.use("/api/v1/products", () => {});
app.use("/api/v1/services", () => {});
app.use("/api/v1/contact", () => {});
app.use("/api/v1/users", () => {});

// BOTTOM MIDDLEWARES
app.use(Error404);
app.use(Exception);

export default app;
