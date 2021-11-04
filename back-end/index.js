const express = require("express");
const app = express();
const BodyParser = require('body-parser');
const cors = require("cors");
require("dotenv").config({ path: ".env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(BodyParser.json());

const tasksController = require('./controllers/taskController');

app.get('/tasks', tasksController.getTasks);

app.post('/tasks', tasksController.insertTask);

app.delete('/tasks/:id', tasksController.deleteTask);

app.put('/tasks/:id', tasksController.upDateTask);
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
