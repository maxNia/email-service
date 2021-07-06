import axios from 'axios';
import { listBaseUrl } from './constants';

export async function getContacts(id: string) {
  try {
    return axios.post(`${listBaseUrl}/list/getContacts`, {id: id});
  } catch (err) {
      throw new Error('NOT_FOUND');
  }
}
