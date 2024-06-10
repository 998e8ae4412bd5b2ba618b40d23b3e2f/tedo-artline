const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: process.env.TRANSPORTER_HOST,
    port: parseInt(process.env.TRANSPORTER_PORT, 10),
    secure: process.env.TRANSPORTER_SECURE === 'true',
    auth: {
        user: process.env.TRANSPORTER_USER,
        pass: process.env.TRANSPORTER_PASSWORD,
    },
});

app.post('/contact', (req, res) => {
    const { name, email, comment } = req.body;

    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: `Message from ${email}`,
        text: `Name: ${name} \nComment: ${comment}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, error: 'Failed to send email' });
        }
        res.status(200).json({ success: true, info });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
