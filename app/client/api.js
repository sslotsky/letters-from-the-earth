import axios from 'axios';
import { login, logout } from './session';

const apiBase = process.env.API_BASE || 'http://localhost:9999/v1';

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
    logout: () => adapter.delete('/session').then((resp) => {
      logout();
      return resp;
    })
  }
}
