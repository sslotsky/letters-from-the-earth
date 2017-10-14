import { matchPath } from 'react-router';
import { composables, getPaginator } from '@orange-marmalade/paginate-this';
import { search } from 'SERVER/useCases/letterRequests';

const routes = [{
  path: '/dashboard',
  load: search
}];

export default function preloader(req, store) {
  const route = routes.find(r => matchPath(req.path, r));

  const loadPage = (listId) => {
    if (!route || !req.currentUser) {
      return Promise.resolve();
    }

    const paginator = getPaginator(listId, store.getState());

    const {
      page = 1,
      pageSize = paginator.get('pageSize')
    } = req.query;


    return route.load(req.currentUser, page, pageSize).then(data => {
      const actions = composables({
        listId,
        preloaded: {
          ...data,
          page,
          pageSize
        }
      });

      store.dispatch(actions.initialize());
    });
  }

  return { loadPage };
}
