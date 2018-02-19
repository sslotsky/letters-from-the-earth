import email from "email-validator";
import { asyncValidator } from "validate-this";

export class ValidationException {
  constructor(errors) {
    this.errors = errors;
  }
}

export function factCheck(bookshelf, params) {
  const bookshelfModel = bookshelf.Model;
  bookshelf.Model = bookshelf.Model.extend({
    constructor: function() {
      bookshelfModel.apply(this, arguments);

      if (this.validate) {
        this.on("saving", (model, attrs, opts) =>
          asyncValidator(model, book =>
            this.validate(book, model, attrs, opts)
          ).then(errors => {
            if (Object.keys(errors).length) {
              const format = opts.formatErrors || (errors => errors);
              throw new ValidationException(format(errors));
            }
          })
        );
      }
    }
  });
}

export const required = (field, model) => {
  if (!model.toJSON()[field]) {
    return Promise.resolve("Required");
  }

  return Promise.resolve();
};

export const unique = (field, model) => {
  const values = model.toJSON();

  return model.where({ [field]: values[field] }).fetchAll().then(records => {
    if (records.some(r => r.id !== values.id)) {
      return "Already Taken";
    }
  });
};

export const validEmail = (field, model) => {
  const val = model.toJSON()[field];

  if (val && !email.validate(val)) {
    return Promise.resolve("Invalid Email Address");
  }

  return Promise.resolve();
};
