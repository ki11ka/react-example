import React, { useState } from 'react'

const StatesBooleanValue = () => {
  const [isBanned, setIsBanned] = useState(false);

  return (
    <div>
      <p>Статус: {isBanned ? 'Забанен' : 'Активен'}</p>

      {isBanned ? (
        <button onClick={() => setIsBanned(false)}>Разбанить пользователя</button>
      ) : (
        <button onClick={() => setIsBanned(true)}>Забанить пользователя</button>
      )}
    </div>
  );
};

export default StatesBooleanValue;