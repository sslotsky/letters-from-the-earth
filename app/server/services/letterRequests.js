import bookshelf from 'SERVER/connection';
import { LetterRequest, LetterDetail, StandardConsumerLetter, StandardBusinessLetter } from 'SERVER/models';
import { NotFound } from 'SERVER/errors';

const letterTypes = {
  standard_consumer_letters: StandardConsumerLetter,
  standard_business_letters: StandardBusinessLetter
};

export function create(letterType, letterRequest, userId) {
  const LetterType = letterTypes[letterType];

  if (!LetterType) {
    throw new NotFound();
  }

  const formatErrors = errors => ({
    details: errors
  });

  return bookshelf.transaction(t =>
    LetterRequest.forge({
      status: 'created',
      purpose: letterRequest.purpose
    }).save({ user_id: userId }, { transacting: t }).tap(request =>
      LetterType.forge().save(letterRequest.details, { transacting: t, formatErrors }).tap(letter =>
        LetterDetail.forge({
          detailable_id: letter.id,
          detailable_type: letterType
        }).save({ letter_request_id: request.id }, { transacting: t })
      )
    )
  );
}
