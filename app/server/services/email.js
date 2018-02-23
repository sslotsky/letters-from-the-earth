import nodemailer from "nodemailer";

function smtpSettings() {
  return {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  };
}

const mailer = nodemailer.createTransport(smtpSettings());

export function send(options) {
  console.log(options);
  mailer.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
}

export function confirmationEmail(confirmationURL, address) {
  send({
    from: '"Fred Foo 👻" <no-reply@letters-from-the-earth.com>',
    to: address,
    subject: "Please Confirm Your Email Address",
    text: confirmationURL,
    html: `<a href="${confirmationURL}">Click here to confirm your account</a>`
  });
} // send({ from: '"Fred Foo 👻" <foo@example.com>', // sender address //   to: "bar@example.com, baz@example.com", // list of receivers //   subject: "Hello ✔", // Subject line //   text: "Hello world?", // plain text body //   html: "<b>Hello world?</b>" // html body // });
