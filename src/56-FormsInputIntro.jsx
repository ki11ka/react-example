import React, { useState } from 'react';

const FormsInputIntro = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return (
        <div>
            <input 
                value={value1} 
                onChange={(event) => setValue1(event.target.value)} 
                placeholder="Введите текст 1"/>
            <p>Текст первого инпута: {value1}</p>

            <br />

            <input 
                value={value2} 
                onChange={(event) => setValue2(event.target.value)} 
                placeholder="Введите текст 2"
            />
            <p>Текст второго инпута: {value2}</p>
        </div>
  );
};

export default FormsInputIntro;