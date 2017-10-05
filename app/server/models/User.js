import bookshelf from '../connection'
import { unique, required } from 'SERVER/validation';

export default bookshelf.Model.extend({
  tableName: 'users',
  validate: function(book) {
    return book(
      book.validate('username').satisfies(required, unique)
    )
  }
})

