import React, { useState } from 'react';

const initNotes = [
    { id: 'GYi9G_uC4gBF1e2SixDvu', prop1: 'value11', prop2: 'value12', prop3: 'value13' },
    { id: 'IWSpfBPSV3SXgRF87uO74', prop1: 'value21', prop2: 'value22', prop3: 'value23' },
    { id: 'JAMjr1FQT8rLTm6tG2m1L', prop1: 'value31', prop2: 'value32', prop3: 'value33' },
];

const Zad1 = () => {
    const [notes, setNotes] = useState(initNotes);

    const deleteNote = (id) => {
        // Оставляем в массиве только те объекты, id которых не совпадает с удаляемым
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    }

    return (
        <div style={{ marginBottom: '40px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h3>Задание №1: Удаление элемента из списка объектов</h3>
            <ul>
                {notes.map(note => (
                    <li key={note.id} style={{ margin: '8px 0' }}>
                        <span style={{ marginRight: '15px' }}>{note.prop1} | {note.prop2} | {note.prop3}</span>
                        <button onClick={() => deleteNote(note.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Zad2 = () => {
    const [notes] = useState(initNotes);

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const fillInputs = (note) => {
        setInput1(note.prop1);
        setInput2(note.prop2);
        setInput3(note.prop3);
    }

    return (
        <div style={{ marginBottom: '40px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h3>Задание №2: Копирование данных li в инпуты</h3>
            <div style={{ marginBottom: '15px' }}>
                <input value={input1} onChange={e => setInput1(e.target.value)} placeholder="Инпут 1" style={{ marginRight: '5px', padding: '4px' }} />
                <input value={input2} onChange={e => setInput2(e.target.value)} placeholder="Инпут 2" style={{ marginRight: '5px', padding: '4px' }} />
                <input value={input3} onChange={e => setInput3(e.target.value)} placeholder="Инпут 3" style={{ marginRight: '5px', padding: '4px' }} />
            </div>
            <ul>
                {notes.map(note => (
                    <li key={note.id} style={{ margin: '8px 0' }}>
                        <span style={{ marginRight: '15px' }}>{note.prop1} | {note.prop2} | {note.prop3}</span>
                        <button onClick={() => fillInputs(note)}>В инпуты</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Zad3 = () => {
    const [notes, setNotes] = useState(initNotes);
    
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    
    const [editId, setEditId] = useState(null);

    const startEdit = (note) => {
        setEditId(note.id);
        setInput1(note.prop1);
        setInput2(note.prop2);
        setInput3(note.prop3);
    }

    function saveChanges() {
        if (!editId) return; 

        const updatedNotes = notes.map(note => {
            if (note.id === editId) {
                return { ...note, prop1: input1, prop2: input2, prop3: input3 };
            }
            return note; 
        });

        setNotes(updatedNotes);
        
        setEditId(null);
        setInput1('');
        setInput2('');
        setInput3('');
    }

    return (
        <div>
            <h3>Задание №3: Редактирование li из инпутов</h3>
            <div style={{ marginBottom: '15px' }}>
                <input value={input1} onChange={e => setInput1(e.target.value)} placeholder="Свойство 1" style={{ marginRight: '5px', padding: '4px' }} />
                <input value={input2} onChange={e => setInput2(e.target.value)} placeholder="Свойство 2" style={{ marginRight: '5px', padding: '4px' }} />
                <input value={input3} onChange={e => setInput3(e.target.value)} placeholder="Свойство 3" style={{ marginRight: '5px', padding: '4px' }} />
                <button onClick={saveChanges} disabled={!editId} style={{ padding: '4px 10px', fontWeight: editId ? 'bold' : 'normal' }}>
                    Сохранить изменения
                </button>
            </div>
            <ul>
                {notes.map(note => (
                    <li key={note.id} style={{ margin: '8px 0', backgroundColor: editId === note.id ? '#fff9c4' : 'transparent' }}>
                        <span style={{ marginRight: '15px' }}>{note.prop1} | {note.prop2} | {note.prop3}</span>
                        <button onClick={() => startEdit(note)}>Редактировать</button>
                        {editId === note.id && <span style={{ marginLeft: '10px', color: 'blue', fontSize: '12px' }}>(выбран)</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const DataObjectsArrayOperations = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '700px' }}>
            <h2>Реактивные операции над массивами объектов в React</h2>
            <Zad1 />
            <Zad2 />
            <Zad3 />
        </div>
    );
};

export default DataObjectsArrayOperations;