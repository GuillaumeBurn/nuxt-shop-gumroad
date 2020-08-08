const nodemailer = require("nodemailer");
export default function(req, res, next) {
  if (req.method === "POST") {
    let emailInfo = req.body.emailInfo;
    let emailProvider = req.body.emailProvider;
    sendMail(emailInfo, emailProvider);
    res.status(200).json({ message: "Your mail send successfully" });
  }

  next();
}

const sendMail = (emailInfo, emailProvider) => {
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
