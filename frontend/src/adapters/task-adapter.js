import { fetchHandler, getPostOptions, getPatchOptions} from "../utils/fetchingUtils";

const baseUrl = '/api';

export const checkForInterest = async (task_id) => {
  return fetchHandler(`${baseUrl}/interests/${task_id}`);
}

export const makeTask = async (title, body, zipcode, status = null, created_at = new Date(), expiration_date, neighbor_id) => {
    return fetchHandler(`${baseUrl}/tasks`, getPostOptions({title, body, zipcode, status, created_at, expiration_date, neighbor_id}))
}