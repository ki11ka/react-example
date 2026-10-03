import React, { useState } from 'react';

const FormsInputSeveral = () => {

    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [val3, setVal3] = useState('');
    const [val4, setVal4] = useState('');
    const [val5, setVal5] = useState('');


    const getAverage = () => {

        const n1 = Number(val1) || 0;
        const n2 = Number(val2) || 0;
        const n3 = Number(val3) || 0;
        const n4 = Number(val4) || 0;
        const n5 = Number(val5) || 0;

        const sum = n1 + n2 + n3 + n4 + n5;
        return sum / 5;
    }

    return (
        <div>
            <input value={val1} onChange={(e) => setVal1(e.target.value)} type="number" placeholder="Число 1" /><br />
            <input value={val2} onChange={(e) => setVal2(e.target.value)} type="number" placeholder="Число 2" /><br />
            <input value={val3} onChange={(e) => setVal3(e.target.value)} type="number" placeholder="Число 3" /><br />
            <input value={val4} onChange={(e) => setVal4(e.target.value)} type="number" placeholder="Число 4" /><br />
            <input value={val5} onChange={(e) => setVal5(e.target.value)} type="number" placeholder="Число 5" /><br />

            <p>Среднее арифметическое: {getAverage()}</p>
        </div>
    );
};

export default FormsInputSeveral;