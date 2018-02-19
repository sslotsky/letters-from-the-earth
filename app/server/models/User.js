import { unique, required, validEmail } from "SERVER/validation";
import bookshelf from "../connection";

export default bookshelf.Model.extend({
  tableName: "users",
  validate: function(book) {
    return book(
      book.validate("email").satisfies(required, unique, validEmail),
      book.validate("password", "role").satisfies(required)
    );
  }
});
