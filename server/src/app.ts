import express, { type Application } from "express";
import cors from "cors";
import contactRoutes from "./routes/contactsRoutes.js";

const app: Application = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.get("/api/health", (req, res) => res.json({ ok: true }));

export default app;
