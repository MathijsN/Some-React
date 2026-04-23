import { createRoot } from 'react-dom/client'
import { useState } from 'react';

const root = createRoot(document.getElementById('root'))

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </>
    );
}



root.render(<Counter />)