const taskModel = require('../models/tasksModel');

const getTasks = async () => {
  const allTasks = await taskModel.getTasks();
  return { status: 200, data: allTasks };
};

const insertTask = async (data) => {
  const { id } = await taskModel.insertTask(data);
  return { status: 201, id };
};

const deleteTask = async (id) => {
  await taskModel.deleteTask(id);
  return { status: 209 };
};

const upDateTask = async (id, data) => {
  await taskModel.upDateTask(id, data);
  return { status: 207 };
};

module.exports = {
  insertTask,
  getTasks,
  deleteTask,
  upDateTask,
}
