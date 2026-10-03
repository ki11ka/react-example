import React, { useState } from 'react';

const FormsSelectArrayValue = () => {
    const texts = ['text1', 'text2', 'text3', 'text4'];
	const [value, setValue] = useState('');
	
	const options = texts.map((text, index) => {
		return <option key={index} value={index}>{text}</option>;
	});
	
	return (
        <div>
            <select value={value} onChange={event => setValue(event.target.value)}>
                {options}
            </select>
            <p>
                ваш выбор: {texts[value]}
            </p>
        </div>
    );
};

export default FormsSelectArrayValue;