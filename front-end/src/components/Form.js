import React, { useState } from 'react';

function Form() {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  console.log(status);
  return (
    <form>
      <label htmlFor="description">
        Descrição
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          type="text"
          placeholder="descrição"
          required
        />
      </label>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">pendente</option>
        <option value="running">em andamento</option>
        <option value="done">pronto</option>
      </select>
    </form>
  )
};

export default Form;
