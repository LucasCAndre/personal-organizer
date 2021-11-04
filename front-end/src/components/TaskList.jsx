import React, { useEffect, useState } from "react";

function TaskList({setId}) {
  const [taskList, setTaskList] = useState([]);

  async function getList() {
    const listing = await fetch('http://localhost:5000/tasks', {
      method: 'GET'
    });
    const list = await listing.json();
    setTaskList(list);
  }

  function handleEditBtn(e) {
    setId(e.target.id);
  };

  async function handleDeleteBtn(e) {
    const { id } = e.target;
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    window.location.reload();
  };
  
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <ul>
        {taskList.map((t) => {
          return (
            <div key={t._id}>
              <li id={t._id}>{`${t.createdAt}: ${t.description} - ${t.status}`}</li>
              <button type="button" id={t._id} onClick={ (e) => handleEditBtn(e) }>Editar</button>
              <button type="button" id={t._id} onClick={ (e) => handleDeleteBtn(e) }>X</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
};

export default TaskList;
