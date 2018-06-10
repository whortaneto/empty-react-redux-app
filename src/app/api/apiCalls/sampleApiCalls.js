import axios from 'axios';

// eslint-disable-next-line
export function testApiCall({ server, client = axios }) {
  // return client.get(`${server}/HoursOfServiceType`);
  return client.get(' https://www.googleapis.com/customsearch/v1').then(data => data);
}

// eslint-disable-next-line
export function mockApiCall({ server, client = axios }) {
  // return client.get(`${server}/HoursOfServiceType`);
  return client.get(' https://www.googleapis.com/customsearch/v1').then(data => data);
}
