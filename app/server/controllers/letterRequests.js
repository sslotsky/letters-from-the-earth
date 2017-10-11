import { createLetter, search } from 'SERVER/useCases/letterRequests';

export default function letterRequests(api) {
  api.post('/letter_requests/search', (req, res, next) => {
    const { page, pageSize } = req.body;
    return search(req.currentUser, page, pageSize).then(results => res.json(results));
  });

  api.post('/letter_requests/:letterType', (req, res, next) => {
    return createLetter(req.params.letterType)(req.body, req.currentUser.id).then(resp => {
      res.json(resp);
    }).catch(next);
  });
}
