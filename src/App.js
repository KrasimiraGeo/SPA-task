import './App.css';
import data from '../src/assets/api.json'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Gallery } from './pages/Gallery'

function App() {

  const [employees, setEmployees] = useState(data)
  const [searchQuery, setSearchQuery] = useState('')

  // filtering through the visible information of each employee
  const filteredEmployees = employees.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.location?.toLowerCase().includes(searchQuery.toLocaleLowerCase()) 
  )

  //lifting the state up from the Navbar - Search query to filter the employees and pass them to the Gallery
  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Gallery employees={filteredEmployees} />
    </div>
  )
}

export default App

