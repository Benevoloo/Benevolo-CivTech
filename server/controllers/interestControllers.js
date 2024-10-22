const Interest = require('../models/Interest')

exports.createInterest = async (req, res) => {
  const { helper_id, task_id } = req.body
  const interest = await Interest.create(helper_id, task_id)

  res.send(interest)
}

exports.deleteAllInterest = async (req, res) => {
  const { task_id } = req.body
  const deletedInterests = await Interest.deleteAllInterestsToTask(task_id)

  res.send(deletedInterests)
}