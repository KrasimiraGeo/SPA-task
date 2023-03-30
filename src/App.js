import './App.css';
import data from '../src/assets/api.json'

import { Navbar } from './components/Navbar'
import { Gallery } from './pages/Gallery'
import { useState } from 'react'

function App() {

// passing the state to the Navbar so it can be lifted back up
const [employees, setEmployees] = useState(data)

const [searchQuery, setSearchQuery] = useState('')

// filtering through the visible information about each employee
const filteredEmployees = employees.filter((employee) =>
employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
employee.location?.toLowerCase().includes(searchQuery.toLocaleLowerCase()) //if location is NOT undefined it parses it; otherwise it is undefined;
)


//lifting the state up from the Navbar - Search query
  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Gallery employees={filteredEmployees} />
    </div>
  )
}

export default App


// ||
// employee.location.split(', ').toLowerCase().includes(searchQuery.toLowerCase())