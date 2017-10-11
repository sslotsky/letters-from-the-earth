import { unique, required } from 'SERVER/validation';
import bookshelf from '../connection';
import User from './User';
import LetterDetail from './LetterDetail';
import StandardConsumerLetter from './StandardConsumerLetter';

export default bookshelf.Model.extend({
  tableName: 'letter_requests',
  detail: function() {
    return this.hasOne(LetterDetail);
  },
  user: function() {
    return this.belongsTo(User);
  },
  validate: function(book) {
    return book(
      book.validate('user_id', 'status', 'purpose').satisfies(required)
    )
  }
})


