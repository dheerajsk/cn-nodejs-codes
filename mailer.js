// 1. import nodemailer
const nodemailer = require('nodemailer');

// 2. Configure email and send it.

async function sendMail() {
  // 1. Create an email transporter.
  // SMTP (Simple Mail Transfer Protocol)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cnsender2@gmail.com',
      pass: 'qrqulwdosrfoimld',
    },
  });

  // 2. Configure email content
  const mailOptions = {
    from: 'cnsender2@gmail.com',
    to: 'cnreceiver@gmail.com',
    subject: 'Welcome to NodeJS App',
    text: 'This is an email using nodemailer in nodejs',
  };

  // 3. Send the email.
  try {
    const result = await transporter.sendMail(
      mailOptions
    );
    console.log('Email sent successfully');
  } catch (err) {
    console.log(
      'Email send failed with error: ' + err
    );
  }
}

sendMail();
