
import { useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer'
import Filter from './components/Filter'
import Header from './components/Header'
import Search from './components/Search'

function App() {
const [query ,setQuery]=useState('')
const [select,setSelect]=useState('')
  return (
    <>
    <Header />
    <div className="flex justify-between px-14 my-4 flex-wrap gap-5">
      <Search setQuery={setQuery} />
      <Filter setSelect={setSelect} />
    </div>
    <CardContainer query={query} select={select}/>
    </>
  )
}

export default App
