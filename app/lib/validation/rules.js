import email from "email-validator";

export const required = val => {
  if (!val) {
    return "Required";
  }
};

export const matches = field => (val, values) => {
  if (val !== values[field]) {
    return `Does Not Match ${field}`;
  }
};

export const validEmail = val => {
  if (val && !email.validate(val)) {
    return "Invalid Email Address";
  }
};
