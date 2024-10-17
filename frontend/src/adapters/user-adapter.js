// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/users';

//posting all information from the sign up form into the user model to create a new user - Alex
export const createUser = async ({ name, username, password, zipcode, email, phoneNumber, userType }) => {
  return fetchHandler(baseUrl, getPostOptions({ name, username, password, zipcode, email, phoneNumber, userType }))
};



// For this one adapter, if an error occurs, we handle it here by printing
// the error and return an empty array

//probably will need to do this for the rest of the information that we are getting from the form
export const getAllUsers = async () => {
  const [users, error] = await fetchHandler(baseUrl);
  if (error) console.log(error); // print the error for simplicity.
  return users || [];
};

export const getUser = async (id) => {
  return fetchHandler(`${baseUrl}/${id}`);
}

export const updateUsername = async ({ id, username }) => {
  return fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
}

