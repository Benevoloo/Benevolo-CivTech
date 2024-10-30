import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils/fetchingUtils";

const baseUrl = '/api';

export const checkForInterest = async (task_id) => {
  return fetchHandler(`${baseUrl}/interests/${task_id}`);
}

export const makeInterest = async (helper_id, task_id) => {
  return fetchHandler(`${baseUrl}/interests`, getPostOptions({helper_id, task_id}))
}

export const getOwnTasks = async (neighbor_id) => {
  return fetchHandler(`${baseUrl}/own-task/${neighbor_id}`)
}

export const deleteAllInterest = async (task_id) => {
  return fetchHandler(`${baseUrl}/interests/${task_id}`, deleteOptions)
}

export const makeTask = async (title, body, zipcode, status = null, expiration_date, neighbor_id) => {
    return fetchHandler(`${baseUrl}/tasks`, getPostOptions({title, body, zipcode, status, expiration_date, neighbor_id}))
}

export const listTaskByZip = async (zipcode) => {
  return fetchHandler(`${baseUrl}/tasks/by-zipcode/${zipcode}`)
}

export const getTaskById = async (neighbor_id) => {
  return fetchHandler(`${baseUrl}/task/${neighbor_id}`)
}

export const getHelperTaskInProgress = async (id) => {
  return fetchHandler(`${baseUrl}/helper-tasks-progress/${id}`)
}

export const getNeighborTaskInProgress = async (id) => {
  return fetchHandler(`${baseUrl}/neighbor-tasks-progress/${id}`)
}

export const getHelperTaskCompleted = async (id) => {
  return fetchHandler(`${baseUrl}/helper-tasks-complete/${id}`)
}

export const getNeighborTaskCompleted = async (id) => {
  return fetchHandler(`${baseUrl}/neighbor-tasks-complete/${id}`)
}

export const updateTask = async (helper_id, status, id) => {
  return fetchHandler(`${baseUrl}/task/${id}`, getPatchOptions({helper_id, status}))
}

export const deleteTask = async (id) => {
  return fetchHandler(`${baseUrl}/task/${id}`, deleteOptions)
}