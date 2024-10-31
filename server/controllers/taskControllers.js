const Task = require('../models/Task')

exports.createTasks = async (req, res) => {
  const { title, body, zipcode, status, expiration_date, neighbor_id } = req.body;

  if (!neighbor_id) res.sendStatus(400);

  const task = await Task.createTask(
    title,
    body,
    zipcode,
    status,
    expiration_date,
    neighbor_id
  );

  res.send(task);
};


exports.listByZipcode = async (req, res) => {
  const { zipcode } = req.params;

  const tasks = await Task.listByZipcode(Number(zipcode));

  res.send(tasks);
}

exports.getTaskById = async (req, res) => {
  const { id } = req.params;

  const task = await Task.getTaskById(id);

  res.send(task);
}

exports.getOwnTasks = async (req, res) => {
  const { neighbor_id } = req.params

  const tasks = await Task.getOwnTasks(neighbor_id)

  res.send(tasks)
}

exports.getNeighborTaskCompleted = async (req, res) => {
  const { id } = req.params;

  const tasks = await Task.getNeighborTaskCompleted(Number(id));

  res.send(tasks);
};

exports.getHelperTaskCompleted = async (req, res) => {
  const { id } = req.params;

  const tasks = await Task.getHelperTaskCompleted(Number(id));

  res.send(tasks);
};

exports.getNeighborTaskInProgress = async (req, res) => {
  const { id } = req.params;

  const tasks = await Task.getNeighborTaskInProgress(Number(id));

  res.send(tasks);
};

exports.getHelperTaskInProgress = async (req, res) => {
  const { id } = req.params;

  const tasks = await Task.getHelperTaskInProgress(Number(id));

  res.send(tasks);
};

exports.updateTask = async (req, res) => {
  const { helper_id, status } = req.body;
  const { id } = req.params

  const updatedTask = await Task.updateTask(helper_id, status, Number(id));

  res.send(updatedTask);
}

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  const deletedTask = await Task.deleteTask(Number(id))

  res.send(deletedTask)
}