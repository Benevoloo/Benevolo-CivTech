const Task = require('../models/Task')

console.log(Task)

exports.createTasks = async (req, res) => {
  const { title, body, zipcode, status, created_at, expiration_date, neighbor_id } = req.body;

  if (!neighbor_id) res.sendStatus(400);

  const task = await Task.createTask(
    title, 
    body, 
    zipcode, 
    status,
    created_at, 
    expiration_date, 
    neighbor_id
  );

  res.send(task);
};

exports.listByZipcode = async (req, res) => {
  const { zipcode } = req.params;

  const tasks = await Task.listByZipcode(zipcode);

  res.send(tasks);
}

exports.getTaskById = async (req, res) => {
  const { id } = req.params;

  const task = await Task.getTaskById(id);

  res.send(task);
}

exports.updateTask = async (req, res) => {
  const { helper_id, status } = req.body;
  const { id } = req.params

  const updatedTask = await Task.updateTask(helper_id, status, id);

  res.send(updatedTask);
}

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  const deletedTask = await Task.deleteTask(id)

  res.send(deletedTask)
}