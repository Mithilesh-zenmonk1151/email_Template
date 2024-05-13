const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

exports.sendOfferLetterpMail = async (payload) => {
  try {
    const {
      email,
      month,
      date,
      year,
      firstname,
      lastname,
      country,
      startMonth,
      startDate,
      startYear,
      numberOfMonth,
      lowestCtc,
      highestCtc,
      acceptanceMonth,
      acceptanceDate,
      role,

      acceptanceYear,
    } = payload.body;
    console.log("REQ.BNODY",payload.body);

    ejs.renderFile(
      path.join(__dirname, "../views/templates/offerLetter.ejs"),
      {
        month,
        date,
        year,
        firstname,
        firstname,
        lastname,
        country,
        startMonth,
        startDate,
        startYear,
        numberOfMonth,
        lowestCtc,
        highestCtc,
        acceptanceDate,
        acceptanceMonth,
        acceptanceYear,
        role
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          var mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject: "Offer Letter",
            html: data,
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
          });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

