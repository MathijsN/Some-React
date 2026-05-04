// import { useState } from 'react'
// import { Fragment } from 'react';
import './styles.css'

import Header from './components/header'
import RepoList from './components/repo-list'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <RepoList />
      </main>
    </>
  )
}

export default App