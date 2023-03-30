import './App.css';
import data from '../src/assets/api.json'

import { Navbar } from './components/Navbar'
import { Gallery } from './pages/Gallery'
import { useState } from 'react'

function App() {

// passing the state to the Navbar so it can be lifted back up
const [employees, setEmployees] = useState(data)

// set the search query 
const [searchQuery, setSearchQuery] = useState('')


//TODO: check if there are present values in the employee object
//TODO: implement filtering for every field of every employee
const filteredEmployees = employees.filter((employee) =>
employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()))


//lifting the state up from the Navbar - Search query
  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Gallery employees={filteredEmployees} />
    </div>
  )
}

export default App
