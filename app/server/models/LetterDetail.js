import { unique, required } from 'SERVER/validation';
import bookshelf from '../connection';
import LetterRequest from './LetterRequest';
import StandardConsumerLetter from './StandardConsumerLetter';
import StandardBusinessLetter from './StandardBusinessLetter';

export default bookshelf.Model.extend({
  tableName: 'letter_details',
  request: function() {
    return this.belongsTo(LetterRequest);
  },
  detailable: function() {
    return this.morphTo('detailable', StandardConsumerLetter, StandardBusinessLetter);
  }
})


