import type { Request, Response } from "express";
import Contact from "../models/Contact.js";
import { sendNotificationEmail } from "../utils/sendEmail.js";

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({ name, email, message });

    // Don't let email failure block a successful save
    sendNotificationEmail({ name, email, message }).catch((err) =>
      console.error("Email send failed:", err),
    );

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: { id: contact._id },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
