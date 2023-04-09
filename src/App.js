import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Products from './Component/Products';
import Services from './Component/Services';
import Why from './Component/Why';
import Medias from './Component/Medias';
import Air from './Images/Air-Insulated.png';
import Mira from './Images/Mira-Switches.png';
import Transformer from './Images/Transformers.png';
import {useSelector} from 'react-redux'; 
import un from './Images/un.png';
import deux from './Images/deux.png';
import trois from './Images/trois.png'; 
import quatres from './Images/quatres.png';
import cinq from './Images/cinq.png';
import six from './Images/six.png';

import {useState} from 'react';



function App() {

  const [collection] = useState ([
    {
      id : 1, 
      img : <img src={Air} alt="Air" className='card'/>,
      title : "Air Insulated Switchgear",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.", 
      button : "VIEW COLLECTION"
  },
  {
      id : 1, 
      img : <img src= {Mira} alt="mira" className='card mira'/>,
      title : "Mira Switches",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.", 
      button : "VIEW COLLECTION"
  },
  {
      id : 1, 
      img : <img src= {Transformer} alt="transformer" className='card'/>,
      title : "Transformers & Package Substations",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.", 
      button : "VIEW COLLECTION"
  }
  ]);
  const [projects] = useState([
    {
      id : 1, 
      img : <img src={un} className='pro'/>, 
      title : "Aenean habitasse",
      under : "Riyadh, Saudi Arabia" 
    },
    {
      id : 2, 
      img : <img src={deux} className='pro'/>, 
      title : "Aenean Tempus ipsum",
      under : "Riyadh, Saudi Arabia" 
    },
    {
      id : 3, 
      img : <img src={trois} className='pro'/>, 
      title : "Aenean habitasse",
      under : "Riyadh, Saudi Arabia" 
    },
    {
      id : 4, 
      img : <img src={quatres} className='pro'/>, 
      title : "Aenean habitasse",
      under : "Riyadh, Saudi Arabia" 
    },
    {
      id : 5, 
      img :<img src={cinq} className='pro'/>, 
      title : "Aenean Tempus ipsum",
      under : "Riyadh, Saudi Arabia" 
    },
    {
      id : 6, 
      img : <img src={six} className='pro'/>, 
      title : "Aenean habitasse",
      under : "Riyadh, Saudi Arabia" 
    }
  ]); 

const [Card] = useState([
  {
    id : 1, 
    title:  "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion", 
    etc : "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.", 
    button : "READ MORE"
    }, 
    {
      id : 2, 
      title:  "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion", 
      etc : "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.", 
      button : "READ MORE"
      }, 
      {
        id : 3, 
        title:  "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion", 
        etc : "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.", 
        button : "READ MORE"
        },
         {
          id : 4, 
          title:  "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion", 
          etc : "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.", 
          button : "READ MORE"
          }
]); 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home collection={collection}/>} /> 
        <Route path="/Products/" element={<Products projects={projects}/>} />
        <Route path="/Services/" element={<Services/>} />
        <Route path="/Medias/" element={ <Medias Card= {Card}/>} />
        <Route path="/Why/" element={<Why />} />
      </Routes>
    </div>
  );
}

export default App;
