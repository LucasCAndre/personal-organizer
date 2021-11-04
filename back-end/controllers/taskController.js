const taskService = require('../services/tasksService');

const getTasks = async (_req, res) => {
  const { status, data } = await taskService.getTasks();
  return res.status(status).json(data);
};

const insertTask = async (req, res) => {
  const data = req.body;
  const { status, id } = await taskService.insertTask(data);
  return res.status(status).json({ id });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { status } = await taskService.deleteTask(id);
  return res.status(status).send();
};

module.exports = {
  insertTask,
  getTasks,
  deleteTask,
};
