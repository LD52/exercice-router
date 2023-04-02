import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Air from './Images/Air-Insulated.png';
import Mira from './Images/Mira-Switches.png';
import Transformer from './Images/Transformers.png';
import {useState} from 'react';
function App() {

  const [collection] = useState ([
    {
      id : 1, 
      img : <img src= {Air} alt=""/>,
      title : "Air Insulated Switchgear",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.", 
      button : "VIEW COLLECTION"
  },
  {
      id : 1, 
      img : <img src= {Mira} alt="mira"/>,
      title : "Mira Switches",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.", 
      button : "VIEW COLLECTION"
  },
  {
      id : 1, 
      img : <img src= {Transformer} alt="transformer"/>,
      title : "Transformers & Package Substations",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.", 
      button : "VIEW COLLECTION"
  }
  ]);




  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} /> 
      </Routes>
    </div>
  );
}

export default App;
