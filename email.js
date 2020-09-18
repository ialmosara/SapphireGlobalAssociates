require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.post('/contact', (req, res) => {
    // Also send email to sapphireglobalassociates@gmail.com
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: `${process.env.INQUIRY_EMAIL}`,
            pass: `${process.env.INQUIRY_PASS}`
        }
    })
    console.log(req)
    const mailOptions = {
        from: 'sapphireglobalinquiry@gmail.com',
        to: 'ialmosara@gmail.com',
        subject: 'Inquiry - Sapphireglobalassociates.com',
        text: 'Name: ' + req.body.name + '\n'
            + 'Address: ' + req.body.address + '\n'
            + 'Email: ' + req.body.email + '\n'
            + 'Phone Number: ' + req.body.phoneNumber + '\n'
            + 'Message: ' + req.body.message + '\n'
    }

    transporter.sendMail(mailOptions, (err, data) => {
        console.log(err, data)
        if (err) { res.send(err) }
        res.send(data)
    });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`)
});