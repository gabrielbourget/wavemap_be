import { createTransport } from "nodemailer";
// import hbs from "nodemailer-express-handlebars";
// const hbs = require("nodemailer-express-handlebars");

const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

// console.log(`Admin email: ${ADMIN_EMAIL} || Admin Password: ${ADMIN_PASSWORD}`);

const transporter = createTransport({
  service: "Gmail",
  auth: {
    user: ADMIN_EMAIL,
    pass: ADMIN_PASSWORD
  }
});

// transporter.use("compile", hbs({
//   viewEngine: hbs,
//   viewPath: "./email-templates/",
// }));

export default transporter;
