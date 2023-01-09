import express from "express";
import cors from "cors";
import reviews from "../api/reviews.route.js";

const app = express(); //loading express into app variable

app.use(cors());
app.use(express.json); // allow server to accept json in the body of a request

app.use("/api/v1/reviews", reviews);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
