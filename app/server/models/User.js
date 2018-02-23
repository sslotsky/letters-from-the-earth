import { unique, required, validEmail } from "SERVER/validation";
import { EmailConfirmationToken } from "./EmailConfirmationToken";
import bookshelf from "../connection";

export default bookshelf.Model.extend({
  tableName: "users",
  confirmationToken: function() {
    return this.hasOne(EmailConfirmationToken);
  },
  validate: function(book) {
    return book(
      book.validate("email").satisfies(required, unique, validEmail),
      book.validate("password", "role").satisfies(required)
    );
  }
});
