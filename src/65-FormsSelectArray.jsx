import React, { useState } from 'react';

const FormsSelectArray = () => {
    const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];

    const [value, setValue] = useState(cities[0]);

    const options = cities.map((city, index) => {
        return <option key={index} value={city}>{city}</option>;
    });

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h3>Выбор города из массива</h3>
            <select value={value} onChange={(event) => setValue(event.target.value)}>
                {options}
            </select>
            <p>Ваш выбор: <strong>{value}</strong></p>
        </div>
    );
};

export default FormsSelectArray;