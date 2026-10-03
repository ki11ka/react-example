import React, { useState } from 'react';

const Zad1 = () => {
    const [numbers, setNumbers] = useState([2, 3, 4, 5, 6]);

    const squareNumber = (index) => {
        let copy = [...numbers]; 
        copy[index] = copy[index] ** 2;
        setNumbers(copy);
    }

    return (
        <div style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h3>Задание №1: Клик для возведения в квадрат</h3>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index} onClick={() => squareNumber(index)} style={{ cursor: 'pointer', margin: '5px 0', color: '#0066cc' }}>
                        {num} (кликни меня)
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Zad2 = () => {
    const [notes, setNotes] = useState(['Купить молоко', 'Вымыть посуду', 'Сделать домашку по React']);

    const deleteNote = (indexToFilter) => {
        const updatedNotes = notes.filter((_, index) => index !== indexToFilter);
        setNotes(updatedNotes);
    }

    return (
        <div style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h3>Задание №2: Удаление элементов</h3>
            <ul>
                {notes.map((note, index) => (
                    <li key={index} style={{ margin: '5px 0' }}>
                        {note}{' '}
                        <button onClick={() => deleteNote(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Zad3 = () => {
    const [items] = useState(['Яблоко', 'Банан', 'Апельсин']);
    const [inputValue, setInputValue] = useState('');

    return (
        <div style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h3>Задание №3: Клик по li копирует текст в инпут</h3>
            <input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Текст из li появится тут" 
                style={{ marginBottom: '10px', padding: '5px' }}
            />
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => setInputValue(item)} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Zad4 = () => {
    const [items, setItems] = useState(['Первый пункт', 'Второй пункт', 'Третий пункт']);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleBlur = () => {
        if (editIndex !== null && inputValue.trim() !== '') {
            let copy = [...items];
            copy[editIndex] = inputValue;
            setItems(copy);
        }
        setEditIndex(null);
        setInputValue('');
    }

    return (
        <div style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h3>Задание №4: Изменение li по потере фокуса (onBlur)</h3>
            <input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                onBlur={handleBlur}
                placeholder="Кликните на li, измените текст и кликните мимо" 
                style={{ marginBottom: '10px', width: '300px', padding: '5px' }}
            />
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => { setEditIndex(index); setInputValue(item); }} style={{ cursor: 'pointer' }}>
                        {item} {editIndex === index && '✍️ (редактируется)'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Zad5 = () => {
    const [list, setList] = useState(['А', 'Б', 'В', 'Г', 'Д']);

    const reverseList = () => {
        let copy = [...list];
        copy.reverse();
        setList(copy);
    }

    return (
        <div style={{ marginBottom: '30px', paddingBottom: '20px' }}>
            <h3>Задание №5: Переворот порядка</h3>
            <button onClick={reverseList} style={{ marginBottom: '10px', padding: '5px 10px' }}>
                Перевернуть список
            </button>
            <ul>
                {list.map((char, index) => (
                    <li key={index}>{char}</li>
                ))}
            </ul>
        </div>
    );
};

const DataArrayOperations = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
            <h2>Реактивные операции над массивами в React</h2>
            <Zad1 />
            <Zad2 />
            <Zad3 />
            <Zad4 />
            <Zad5 />
        </div>
    );
};

export default DataArrayOperations;