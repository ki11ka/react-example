import React, { useState } from 'react';

const CheckboxConditionalRendering = () => {

    const [checked1, setChecked1] = useState(false);

    const [checked2, setChecked2] = useState(true);

    return (
        <div style={{ padding: '20px' }}>
            
            {/* ЗАДАНИЕ 1 */}
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={checked1} 
                        onChange={() => setChecked1(!checked1)} 
                    />
                    Мне уже есть 18 лет
                </label>

                {checked1 ? (
                    <div>
                        <p>Вам уже есть 18</p>
                        <p>здесь расположен контент только для взрослых</p>
                    </div>
                ) : (
                    <div>
                        <p>Вам еще нет 18 лет</p>
                    </div>
                )}
            </div>



            {/* ЗАДАНИЕ 2 */}
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        checked={checked2} 
                        onChange={() => setChecked2(!checked2)} 
                    />
                    Показать / скрыть текст
                </label>

                {checked2 && <p style={{ marginTop: '10px', color: 'green' }}>Этот абзац виден только тогда, когда чекбокс отмечен!</p>}
            </div>

        </div>
    );

};

export default CheckboxConditionalRendering;