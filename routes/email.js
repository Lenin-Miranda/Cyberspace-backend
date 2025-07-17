import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporte = nodemailer.createTransport({
    host: "smtp.ionos.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailToCompany = {
    from: `"IT Cyberspace" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    name: `${name}`,
    email: `${email}`,
    subject: `Hi, I am ${name} — ${subject}`,
    text: `${message}`,
  };

  const confirmationToCLient = {
    from: `IT Cyberspace <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Thank you for contacting us!`,
    text: `Hi ${name},\n\nThanks for reaching out to us. We will get back to you shortly\n\n- IT Cyberspace`,
  };

  try {
    await transporte.sendMail(mailToCompany);
    await transporte.sendMail(confirmationToCLient);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

export default router;
