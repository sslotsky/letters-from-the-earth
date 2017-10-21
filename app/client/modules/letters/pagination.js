import { createPaginator } from '@orange-marmalade/paginate-this';
import api from 'APP_ROOT/api';

export default createPaginator({
  listId: 'letterRequests',
  fetch: ({ query }) => () => api.letterRequests.search(query)
});
