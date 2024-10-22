import { fetchHandler, getPostOptions, getPatchOptions} from "../utils/fetchingUtils";

const baseUrl = '/api';

export const checkForInterest = async (task_id) => {
  return fetchHandler(`${baseUrl}/interests/${task_id}`);
}