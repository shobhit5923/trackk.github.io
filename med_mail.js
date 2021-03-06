"use strict";
const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
const path = require("path");
const PORT = 5000
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/trackk.github.io"));

app.get("/", (req, res, next) => {
     //res.sendFile('index.ejs');
     res.sendFile(path.join(__dirname+'/index.html'));
    });
app.get("/medicine", (req, res, next) => {
     //res.render('medicine.html');
     res.sendFile(path.join(__dirname+'/medicine.html'));
    });
app.post("/medicine", (req, res, next) => {
    //mail().then(console.log("Mail Sent"));
    mail().catch(console.error);
    res.redirect("/");
    });
app.get("/water", (req, res, next) => {
     res.render('water.html');
    });
app.get("/food", (req, res, next) => {
     res.render('food.html');
    });
app.listen(PORT, function () {
    console.log('Express server listening on port ', PORT);
});
async function mail() {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "<goyalshobhit0990@gmail.com>",
            pass: "<shobhit*123>"
        }
    });

    const mailOptions = {
        from: '"Emergency " goyalshobhit0990@gmail.com', // sender address
        to: "devshobhit@gmail.com , divyant3007@gmail.com ", // list of receivers devshobhit@gmail.com, shaktigill1356@gmail.com, rgadoo_be18@thapar.edu
        subject: "EMERGENCY", // Subject line
        text: "ALERT! Call 100/102.", // plain text body
        html: "Emergency Alert!! ", // html body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Email sent >>>>>>> " + info.response);
        }
    });

}

mail().catch(console.error);
