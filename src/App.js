import './App.css';

import { Navbar } from './components/Navbar';
import { Gallery } from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Gallery/>
    </div>
  );
}

export default App;
