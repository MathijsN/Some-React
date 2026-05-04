import { useState } from 'react'
import { Fragment } from 'react';
import './styles.css'
import contentInfo from "./data.js"

import Header from './components/header'

function App() {
  const newArr = contentInfo.map(content => {
    return <Header
      content={content.heading}
      link={content.link}
    />
  })
  return (

    <>
      <header>
        {newArr}
      </header>
    </>
  )
}

export default App