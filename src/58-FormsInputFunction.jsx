import React, { useState } from 'react';

const getBirthYear = (age) => {
    if (!age) return '';
    const currentYear = new Date().getFullYear();
    return currentYear - Number(age);
};

const fahrenheitToCelsius = (f) => {
    if (f === '') return '';
    const celsius = (Number(f) - 32) * 5 / 9;
    return celsius.toFixed(1); 
};


const Zad1 = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input value={value} onChange={handleChange} placeholder="Введите ваш возраст" />
            <p>Год рождения: {getBirthYear(value)}</p>
        </div>
    );
};


const Zad2 = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input value={value} onChange={handleChange} placeholder="Градусы Фаренгейта" />
            <p>Температура в Цельсиях: {fahrenheitToCelsius(value)} °C</p>
        </div>
    );
};


const FormsInputFunction = () => {
    return (
        <div>
            <Zad1 />
            <Zad2 />
        </div>
    );
};

export default FormsInputFunction;