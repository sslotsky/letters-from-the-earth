import axios from 'axios';
import { login, logout } from './session';

const apiBase = process.env.API_BASE;

export const adapter = axios.create({
  baseURL: apiBase,
  withCredentials: true,
  headers: {
    Accept: 'application/json'
  }
});

export default {
  identity: {
    signup: data => adapter.post('/accounts', data).then((resp) => {
      login(resp.data.user);
      return resp;
    }),
    checkEligibility: username => adapter.post('/eligibility_checks', { username }),
    login: data => adapter.post('/session', data).then((resp) => {
      login(resp.data.user);
      return resp;
    }).catch((err) => {
      if (err.response.data.code === 'invalid_credentials') {
        err.response.data.errors = { 
          credentials: ['Invalid credentials']
        }
      }

      throw err;
    }),
    logout: () => adapter.delete('/session').then((resp) => {
      logout();
      return resp;
    })
  }
}
