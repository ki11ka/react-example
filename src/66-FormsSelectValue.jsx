import React, { useState } from 'react';

const FormsSelectValue = () => {

    const [value, setValue] = useState('1');

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h3>Выберите вашу возрастную группу</h3>
            <select value={value} onChange={(event) => setValue(event.target.value)}>
                <option value="1">от 0 до 12 лет</option>
                <option value="2">от 13 до 17 лет</option>
                <option value="3">от 18 до 25 лет</option>
                <option value="4">старше 25 лет</option>m 
            </select>

            <p>
                {value === '1' && 'Вы выбрали детскую группу.'}
                {value === '2' && 'Вы выбрали группу подростков.'}
                {value === '3' && 'Вы выбрали молодёжную группу.'}
                {value === '4' && 'Вы выбрали взрослую группу.'}
            </p>
        </div>
    );

};

export default FormsSelectValue;