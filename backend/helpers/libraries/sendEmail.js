const nodemailer = require = require("nodemailer");

const sendEmail = async(mailOptions)=>{
    let tranporter = nodemailer.createTransport({
        host : process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth : {
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    });

    let info = await tranporter.sendMail(mailOptions);
    console.log(`Message Send : ${info.messageId}`);
}

module.exports = {
    sendEmail
}