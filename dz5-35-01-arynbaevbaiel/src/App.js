import React, { useState } from 'react';
import './App.css'

function App() {
    const [nameInput, setNameInput] = useState('');
    const [names, setNames] = useState([]);
    const [emptyMessage, setEmptyMessage] = useState(false);

    const inputChange = (event) => {
        setNameInput(event.target.value);
    };

    const addName = () => {
        if (nameInput.trim() !== '') {
            setNames([...names, nameInput]);
            setNameInput('');
            setEmptyMessage(false);
        }
    };

    const handleChangeName = (index) => {
        return () => {
            const newName = prompt('Add new name', names[index]);
            if (newName !== null && newName.trim() !== '') {
                const updatedNames = [...names];
                updatedNames[index] = newName;
                setNames(updatedNames);
            }
        };
    };

    return (
        <div>
            <div className="container">
                <input className="text" type="text" value={nameInput} onChange={inputChange} placeholder="Type name"/>
                <button className="btn" onClick={addName} disabled={!nameInput.trim()}>ADD</button>
            </div>
            {emptyMessage && <p>LIst is empty</p>}
            <ol className="list">
                {names.map((name, index) => (
                    <li className="listInner" key={index}>
                        {name}
                        <button className="btn2" onClick={handleChangeName(index)}>Change</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default App;
