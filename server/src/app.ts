import express, { type Application } from "express";
import cors from "cors";
import contactRoutes from "./routes/contactsRoutes.js";

const app: Application = express();

const allowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like Postman, curl, server-to-server)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
  }),
);

app.use(express.json());

app.use("/api/contact", contactRoutes);
app.get("/api/health", (req, res) => res.json({ ok: true }));

export default app;
