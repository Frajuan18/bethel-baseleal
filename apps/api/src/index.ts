import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config({ path: "../../.env" });

const app = express();
const port = Number(process.env.API_PORT ?? 4000);
const webOrigin = process.env.WEB_ORIGIN ?? "http://localhost:3000";

app.use(cors({ origin: webOrigin }));
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "basleal-api",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    checkedAt: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.warn("MONGODB_URI is not set; database features are unavailable.");
    return;
  }

  void mongoose.connect(mongoUri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error: unknown) => console.error("MongoDB connection failed:", error));
});
