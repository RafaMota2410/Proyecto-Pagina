import React, { useState } from 'react';

export default function Component() {
    const [data, setData] = useState('');

    const botonUno = () => {
        alert("Error: Revisar información");
    };

    return (
        <div>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            <button onClick={botonUno}>Clic</button>
        </div>
    );
}