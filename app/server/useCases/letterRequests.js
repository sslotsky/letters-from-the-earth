import { LetterDetail, StandardConsumerLetter, StandardBusinessLetter } from 'SERVER/models';
import { create } from 'SERVER/services/letterRequests';

export function search(user, page = 1, pageSize = 15) {
  return LetterDetail.query((qb) => {
    qb.innerJoin('letter_requests', 'letter_requests.id', 'letter_details.letter_request_id');
    qb.where('letter_requests.user_id', '=', user.id);
  }).fetchPage({
    page,
    pageSize,
    withRelated: [
      'detailable',
      'request'
    ]
  }).then(result => ({
    totalCount: result.pagination.rowCount,
    results: result.toJSON()
  }));
}

export const createLetter = letterType => (letterRequest, userId) =>
  create(letterType, letterRequest, userId);
