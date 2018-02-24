import readline from "readline-sync";
import email from "email-validator";
import { eligible, create } from "SERVER/services/user";

function getEmail() {
  return new Promise(resolve => {
    const address = readline.question("Enter your email address: ");
    if (!address) {
      console.log("Email address is required.");
      resolve(getEmail());
    }

    if (!email.validate(address)) {
      console.log("Not a valid email address.");
      resolve(getEmail());
    }

    eligible(address).then(available => {
      if (!available) {
        console.log("Address is already taken.");
        resolve(getEmail());
      }

      resolve(address);
    });
  });
}

function getPassword() {
  const pass = readline.question("Enter your password: ", {
    hideEchoBack: true
  });

  const confirm = readline.question("Confirm your password: ", {
    hideEchoBack: true
  });

  if (pass !== confirm) {
    console.log("Passwords do not match.");
    return getPassword();
  }

  return pass;
}

getEmail().then(address => {
  const pass = getPassword();

  create({
    email: address,
    password: pass,
    role: "admin",
    confirmed: true
  }).then(process.exit);
});
