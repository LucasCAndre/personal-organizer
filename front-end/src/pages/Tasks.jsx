import React, { useState } from "react";
import Form from '../components/Form';
import TaskList from "../components/TaskList";

function Tasks() {
  const [id, setId] = useState();

  return (
    <div>
      {
        id
        ? <Form id={id} />
        : <Form />
      }
      {/* <Form id={ id } /> */}
      <TaskList setId={setId} />
    </div>
  )
};

export default Tasks;
