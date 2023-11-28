// sendMail.js

const nodemailer = require('nodemailer');

exports.handler = async function (event, context, callback) {
  const { name, email, message } = JSON.parse(event.body);

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yesiamcutee@gmail.com', // your Gmail address
      pass: 'cooldj131', // your Gmail password or an app-specific password
    },
  });

  // Setup email data
  let mailOptions = {
    from: email, // use the user's email as the "from" email
    to: 'yesiamcutee@gmail.com', // recipient email address
    subject: 'New Inquiry from Website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return callback(error, {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to send email' }),
      });
    }

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    });
  });
};
