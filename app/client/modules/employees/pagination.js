import { createPaginator } from "@orange-marmalade/paginate-this";
import api from "APP_ROOT/api";

export default createPaginator({
  listId: "employees",
  fetch: ({ query }) => () => api.employees.search(query)
});
