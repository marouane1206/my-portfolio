require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Include the cors middleware

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const app = express();
const PORT = process.env.PORT || 3001; // You can change the port number if needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Allow CORS requests from the frontend's origin (adjust origin to match your exact URL):
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    credentials: true, // Allow cookies for authentication, if needed
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { senderName, senderEmail, subject, message } = req.body;

  try {
    // Input validation (see Input Validation Note below)
    if (!senderName || !senderEmail || !subject || !message) {
      throw new Error("Missing required fields in email submission.");
    }

    // Create a transporter object using a secure, trusted email service (see Security Note below)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Replace with your preferred service
      auth: {
        user: email,
        pass: password,
      },
    });

    // Create mail options with additional fields for better formatting and personalization
    const mailOptions = {
      from: senderEmail,
      to: email, // Replace with the intended recipient
      subject: subject,
      text: `Name: ${senderName}\nEmail: ${senderEmail}\nMessage: ${message}`,
      html: `
        <h2>Message from ${senderName}</h2>
        <p>Email: ${senderEmail}</p>
        <p>${message}</p>
      `, // Add HTML content for visually appealing emails
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email: " + error.message);
  }
});
