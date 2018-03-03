import { required } from "SERVER/validation";
import User from "./User";
import bookshelf from "../connection";

export const Employee = bookshelf.Model.extend({
  tableName: "employees",
  user: function() {
    return this.belongsTo(User);
  },
  validate: function(book) {
    return book(
      book.validate("first_name", "last_name", "user_id").satisfies(required)
    );
  }
});

export const Employees = bookshelf.Collection.extend({
  model: Employee
});
