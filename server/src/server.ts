import dotenv from "dotenv";

import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3300;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀Server running on port ${PORT}`));
});
