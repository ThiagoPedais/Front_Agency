import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import { Hero } from './components/UI/Hero'
import { Counter } from './components/UI/Counter'
import { Service } from './components/UI/Service'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Service />
    </>
  )
}

export default App
