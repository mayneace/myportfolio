import { Router } from "express";
import rateLimit from "express-rate-limit";
import { createContact } from "../controllers/contactController.js";
import { contactValidationRules } from "../middleware/validateContact.js";
import { handleValidationErrors } from "../middleware/validateContact.js";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5,
  message: { success: false, message: "Too many requests, try again later" },
});

router.post(
  "/",
  contactLimiter,
  contactValidationRules,
  handleValidationErrors,
  createContact,
);

export default router;
