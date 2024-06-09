const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secure: false, // true для 465, false для других портов
    auth: {
        user: 'main@tedogroup.com', // ваш email для отправки писем
        pass: '20jsr63mkm37p7X' // ваш пароль для отправки писем
    }
});

app.post('/digital-contact', (req, res) => {
    const { name, email, comment } = req.body;
    console.log(req.body);

    const mailOptions = {
        from: "main@tedogroup.com",
        to: "pochtastud@gmail.com",
        subject: `Message from ${email}`,
        text: `Name: ${name} \ncomment: ${comment}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false, error });
        }
        res.status(200).json({ success: true });
    });

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
