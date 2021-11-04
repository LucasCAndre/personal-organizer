const { ObjectID } = require('mongodb');
const connection = require('./connection');

const getTasks = async () => {
  const db = await connection();
  const allTasks = await db.collection('tasks').find().toArray();
  return allTasks;
};

const insertTask = async (data) => {
  const db = await connection();
  const newTask = await db.collection('tasks').insertOne(data);
  return { id: newTask.insertedId };
};

const deleteTask = async (id) => {
  const db = await connection();
  await db.collection('tasks').deleteOne({ _id: ObjectID(id) });
};

module.exports = {
  getTasks,
  insertTask,
  deleteTask,
};
