import React, { useState } from 'react';

const FormsSelectIntro = () => {

    const [city, setCity] = useState('Москва');

    const handleSelectChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h3>Выбор города</h3>
            <select value={city} onChange={handleSelectChange}>
                <option value="Москва">Москва</option>
                <option value="Санкт-Петербург">Санкт-Петербург</option>
                <option value="Новосибирск">Новосибирск</option>
                <option value="Екатеринбург">Екатеринбург</option>
            </select>
            <p>Ваш выбор: <strong>{city}</strong></p>
        </div>
    );

};

export default FormsSelectIntro;