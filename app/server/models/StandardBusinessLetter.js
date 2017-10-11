import { unique, required } from 'SERVER/validation';
import bookshelf from '../connection';
import LetterDetail from './LetterDetail';

export default bookshelf.Model.extend({
  tableName: 'standard_business_letters',
  detail: function() {
    return this.morphOne(LetterDetail, 'detailable');
  },
  validate: function(book) {
    return book(
      book.validate(
        'first_name',
        'last_name',
        'address',
        'city',
        'state',
        'zip',
        'business_name',
        'individual_name',
        'business_address',
        'business_city',
        'business_state',
        'business_zip'
      ).satisfies(required)
    )
  }
})


