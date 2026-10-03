import React, { useState } from 'react';

const initNotes = [
    { id: 'GYi9G_uC4gBF1e2SixDvu', prop1: 'value11', prop2: 'value12', prop3: 'value13' },
    { id: 'IWSpfBPSV3SXgRF87uO74', prop1: 'value21', prop2: 'value22', prop3: 'value23' },
    { id: 'JAMjr1FQT8rLTm6tG2m1L', prop1: 'value31', prop2: 'value32', prop3: 'value33' },
];

const Zad1 = () => {
    const [notes, setNotes] = useState(initNotes);

    const addFixedNote = () => {
        const newNote = {
            id: crypto.randomUUID(),
            prop1: 'new_value1',
            prop2: 'new_value2',
            prop3: 'new_value3'
        };
        setNotes([...notes, newNote]);
    }

    return (
        <div style={{ marginBottom: '40px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h3>Задание №1: Добавление дефолтного элемента</h3>
            <button onClick={addFixedNote} style={{ marginBottom: '15px', padding: '5px 10px' }}>
                Добавить элемент
            </button>
            <ul>
                {notes.map(note => (
                    <li key={note.id} style={{ margin: '5px 0' }}>
                        <span style={{ marginRight: '10px', color: 'blue' }}>{note.prop1}</span>
                        <span style={{ marginRight: '10px', color: 'green' }}>{note.prop2}</span>
                        <span style={{ color: 'orange' }}>{note.prop3}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Zad2 = () => {
    const [notes, setNotes] = useState(initNotes);
    
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const addCustomNote = () => {
        if (!input1.trim() || !input2.trim() || !input3.trim()) return;

        const newNote = {
            id: crypto.randomUUID(),
            prop1: input1,
            prop2: input2,
            prop3: input3
        };

        setNotes([...notes, newNote]);

        setInput1('');
        setInput2('');
        setInput3('');
    }

    return (
        <div>
            <h3>Задание №2: Добавление из инпутов</h3>
            <div style={{ marginBottom: '15px' }}>
                <input value={input1} onChange={e => setInput1(e.target.value)} placeholder="Свойство 1" style={{ marginRight: '5px', padding: '4px' }} />
                <input value={input2} onChange={e => setInput2(e.target.value)} placeholder="Свойство 2" style={{ marginRight: '5px', padding: '4px' }} />
                <input value={input3} onChange={e => setInput3(e.target.value)} placeholder="Свойство 3" style={{ marginRight: '5px', padding: '4px' }} />
                <button onClick={addCustomNote} style={{ padding: '4px 10px' }}>Создать li</button>
            </div>
            <ul>
                {notes.map(note => (
                    <li key={note.id} style={{ margin: '5px 0' }}>
                        <span style={{ marginRight: '10px' }}>{note.prop1}</span>
                        <span style={{ marginRight: '10px' }}>{note.prop2}</span>
                        <span>{note.prop3}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const DataObjectsArrayAdding = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '700px' }}>
            <h2>Реактивное добавление в массив объектов в React</h2>
            <Zad1 />
            <Zad2 />
        </div>
    );
};


export default DataObjectsArrayAdding;




