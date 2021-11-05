import React, { useEffect, useState } from 'react';

function Form({id}) {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pendente');

  useEffect(() => {

  });

  async function handleCreate() {
    const createTime = new Date();
    const data = {
      createdAt: createTime,
      status,
      description,
    };
    await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  };

  async function handleEdit() {
    const data = {
      status,
      description,
    };
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    window.location.reload();
  };

  function btn() {
    if (id !== undefined) {
      return (
        <button
        type="button"
        onClick={ handleEdit }
      >
        Editar
      </button>
      )
    }
    return (
      <button
        type="button"
        onClick={ handleCreate }
      >
        Criar
      </button>
    )
  };

  return (
    <form>
      <label htmlFor="description">
        Descrição
        <input
          value={ description }
          onChange={ (e) => setDescription(e.target.value) }
          id="description"
          type="text"
          placeholder="descrição"
          required
        />
      </label>
      <select onChange={ (e) => setStatus(e.target.value) }>
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Pronto">Pronto</option>
      </select>
      { btn() }
    </form>
  )
};

export default Form;
