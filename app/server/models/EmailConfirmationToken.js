import { required, unique } from "SERVER/validation";
import User from "./User";
import bookshelf from "../connection";

export const EmailConfirmationToken = bookshelf.Model.extend({
  tableName: "email_confirmation_tokens",
  user: function() {
    return this.belongsTo(User);
  },
  validate: function(book) {
    return book(
      book.validate("user_id").satisfies(unique),
      book.validate("token", "user_id").satisfies(required)
    );
  }
});

export const EmailConfirmationTokens = bookshelf.Collection.extend({
  model: EmailConfirmationToken
});
