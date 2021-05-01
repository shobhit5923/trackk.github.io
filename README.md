# trackk.github.io

### Terms and Conditions
  To send the mails successfully follow the steps given below:
  - Admin must use a gmail account which had its permissions changed by using the link provided [here](https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4NhZ0wnNV23ZII1iPgOxX6-_fW0SlJuKA5G6TAukr6wjrA9E1YCVHkCpE4X8T7QGHFNQQavrYWn8MY06VNORvGiFeR7bw). Give the require access.
  - Now use the same ID in [med_mail](https://github.com/shobhit5923/trackk.github.io/blob/main/med_mail.js) to fill in the credentials (user and password).
  ```
     const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "<admin@gmail.com>",
            pass: "<password>"
        }
    });
   ```
   - Next one must set the mail settings accordingly.
   ```
   const mailOptions = {
        from: '"TITLE " admin@gmail.com', // sender address
        to: "sender1@gmail.com , ", // list of receivers 
        subject: "SUBJECT", // Subject line
        text: "ALERT", // plain text body
        html: "<b>MESSAGE</b>", // html body
    };
   ```
   - Save the code and you are good to go.

