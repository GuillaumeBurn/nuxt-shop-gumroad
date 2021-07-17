const nodemailer = require("nodemailer");
const axios = require("axios");

const SECRET_KEY = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe';

export default async(req, res, next) => {
  if (req.method === "POST") {
    let emailInfo = req.body.emailInfo;
    sendMail(emailInfo);
    res.status(200).json({ message: "Your mail send successfully" });
  }
  const token = req.body.token;
  try {
    const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`
      )
    if (response.success) {
    res.end(JSON.stringify({
        success: true,
        message: 'Token verifyed',
        response: response
    }))
    } else {
    res.end(JSON.stringify({
        success: false,
        message: 'Invalid token',
        response: response
    }))
    }
  } catch(e) {
    console.log('ReCaptcha error:', e)
  }
  next();
}

const sendMail = (emailInfo) => {
  let emailProvider = {
    username: "alberta71@ethereal.email",
    password: "BJgwmJJetZMDqstnwX"
  };
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: emailProvider.username,
      pass: emailProvider.password
    }
  });
  setTimeout(() => {
    transporter.sendMail({
      from: emailInfo.email,
      to: emailInfo.email,
      subject: `Message from ${emailInfo.name}`,
      html: `<b><h1>${emailInfo.message}</h1></b>`
    });
  }, 100);
};
