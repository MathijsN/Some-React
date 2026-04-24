import { useState } from 'react'
import { Fragment } from 'react';
import './styles.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <Link />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <footer>
        <Link />
      </footer>
    </main>
  )
}

function Link() {
  return (
    <>
      <a href="#">Klik mij</a>
    </>
  )
}

export default App