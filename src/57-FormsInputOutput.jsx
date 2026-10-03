import React, { useState } from 'react';

const FormsInputOutput = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <input 
                value={value} 
                onChange={(event) => setValue(event.target.value)} 
            />
            <p>Количество символов: {value.length}</p>
        </div>
    );
};

export default FormsInputOutput;