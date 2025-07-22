const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

app.post("/kontakt", async (req, res) => {
    const{name, mail, message} = req.body;
    console.log("Data from formular: ", name, mail, message);
    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: mail,
    subject: 'Kontaktformular KLJB Altdorf',
    text: `Lieber ${name}, Vielen Dank für dein Nachricht, wir kümmern uns darum.`
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log('Error:', error);
        res.json({success: false});
    } else {
        console.log('Email sent: ', info.response);
        res.json({success: true});
    }
});
});




app.listen(8000,() => console.log("Server is running on port 8000"));