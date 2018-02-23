import axios from "axios";
import { clearUser } from "MODULES/identity/actions";
import { login, logout } from "./session";
import store from "./store";

const apiBase = process.env.API_BASE;

export const adapter = axios.create({
  baseURL: apiBase,
  withCredentials: true,
  headers: {
    Accept: "application/json"
  }
});

adapter.interceptors.response.use(undefined, error => {
  if (error.response.status === 403) {
    store().dispatch(clearUser());
    logout();
  } else {
    return Promise.reject(error);
  }
});

export default {
  identity: {
    signup: data => adapter.post("/accounts", data),
    checkEligibility: email => adapter.post("/eligibility_checks", { email }),
    confirmAccount: token => adapter.post(`/confirmations`, { token }),
    login: data =>
      adapter
        .post("/session", data)
        .then(resp => {
          login(resp.data.user);
          return resp;
        })
        .catch(err => {
          if (err.response.data.code === "invalid_credentials") {
            err.response.data.errors = {
              _error: ["Invalid credentials"]
            };
          }

          throw err;
        }),
    logout: () =>
      adapter.delete("/session").then(resp => {
        logout();
        return resp;
      })
  },
  letterRequests: {
    search: params => {
      return adapter.post("/letter_requests/search", params);
    },
    of: type => data => adapter.post(`/letter_requests/${type}`, data)
  }
};
