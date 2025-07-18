import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRouter from "./routes/email.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/send-email", emailRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
