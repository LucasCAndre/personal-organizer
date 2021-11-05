import React, { useEffect, useState } from "react";

function TaskList({setId}) {
  const [taskList, setTaskList] = useState([]);
  const [orderBy, setOrderBy] = useState('description');

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

  function orderList() {
    taskList.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    });
    setTaskList([...taskList]);
  }
  
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <select onChange={ (e) => setOrderBy(e.target.value) }>
        <option value="description">Descrição</option>
        <option value="createdAt">Data de criação</option>
        <option value="status">Estatus</option>
      </select>
      <button onClick={ orderList }>Ordenar</button>
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
