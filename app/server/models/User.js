import { unique, required } from 'SERVER/validation';
import bookshelf from '../connection';

export default bookshelf.Model.extend({
  tableName: 'users',
  validate: function(book) {
    return book(
      book.validate('username').satisfies(required, unique),
      book.validate('password', 'role').satisfies(required)
    )
  }
})

