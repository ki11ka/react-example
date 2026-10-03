import React, { useState } from 'react';

const initNotes = [
    {
        id: crypto.randomUUID(),
        name: 'name1',
        desc: 'long description 1',
        show: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'name2',
        desc: 'long description 2',
        show: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'name3',
        desc: 'long description 3',
        show: false,
    },
];

const DataShow = () => {
    const [notes, setNotes] = useState(initNotes);

    const toggleDescription = (id) => {
        const updatedNotes = notes.map(note => {
            if (note.id === id) {
                return { ...note, show: !note.show };
            }
            return note;
        });
        setNotes(updatedNotes);
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
            <h2>Реактивный показ данных в React</h2>
            
            {notes.map(note => (
                <p key={note.id} style={{ margin: '15px 0', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <strong>{note.name}</strong> 
                    
                    <button 
                        onClick={() => toggleDescription(note.id)} 
                        style={{ marginLeft: '15px', padding: '2px 8px', cursor: 'pointer' }}
                    >
                        {note.show ? 'Скрыть описание' : 'Показать описание'}
                    </button>
                    
                    {note.show && (
                        <span style={{ display: 'block', marginTop: '5px', color: '#555', fontStyle: 'italic' }}>
                            {note.desc}
                        </span>
                    )}
                </p>
            ))}
        </div>
    );
};

export default DataShow;