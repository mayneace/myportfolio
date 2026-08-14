import express, { type Application } from "express";
import cors from "cors";
import contactRoutes from "./routes/contactsRoutes.js";

const app: Application = express();

app.set("trust proxy", 1);

const allowedOrigins = (process.env.CLIENT_URL || "https://127.0.0.1:5174,https://moses-jet.vercel.app")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false); // reject cleanly, no thrown error
      }
    },
  })
);

app.use(express.json());

app.use("/api/contact", contactRoutes);
app.get("/api/health", (req, res) => res.json({ ok: true }));

export default app;
