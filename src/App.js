
import SimpsonsCitation from './components/Citations';
import './App.css';
import axios from 'axios'
import { useState } from 'react';



function App() {

  const sampleSimpson = {
    character : "Abdou",
    quote : "Jaime le poulet",
    image : 'https://randomuser.me/api/portraits/med/men/40.jpg',
  };
  
  const [simpson, setSimpson] = useState(sampleSimpson);
  const getSimpson = () => {

    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response) => response.data)
      .then((data) =>  setSimpson(data[0]))
  };


  return (
    <div className="App">
        <SimpsonsCitation simpson={simpson} />
        <button type="button" onClick={getSimpson}>Oh pinaise!</button>
    </div>

  )
}

export default App;