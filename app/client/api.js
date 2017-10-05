import axios from 'axios';

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
    signup: data => adapter.post('/accounts', data),
    checkEligibility: username => adapter.post('/eligibility_checks', { username })
  }
}
