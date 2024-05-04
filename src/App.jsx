
import './App.css'
import CardContainer from './components/CardContainer'
import Filter from './components/Filter'
import Header from './components/Header'
import Search from './components/Search'

function App() {

  return (
    <>
    <Header />
    <div className="flex justify-between px-14 my-4 flex-wrap gap-5">
      <Search />
      <Filter />
    </div>
    <CardContainer />
    </>
  )
}

export default App
