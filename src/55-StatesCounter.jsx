import React, { useState } from 'react';

const StatesCounter = () => {
    const [age, setAge] = useState(25);

    return (
        <div>
            <p>Возраст: {age}</p>
            <button onClick={() => setAge(age + 1)}>Увеличить</button>
            <button onClick={() => setAge(age - 1)}>Уменьшить</button>
        </div>
    );
};

export default StatesCounter;