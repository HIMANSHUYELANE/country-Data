
import { useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer'
import Filter from './components/Filter'
import Header from './components/Header'
import Search from './components/Search'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default App
