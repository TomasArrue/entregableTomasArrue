import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Card } from './components/Card'


function App() {
  const [view, setView ] = useState("register");
  const [values, setValues ] = useState(null);

  const handleFetchInfo = (userInformation) =>{
    setValues(userInformation);
    handleView("card");
  };

  const handleView = (page) =>{
    setView(page);
  };

  return (
    <div>
      {
          view === "register" && (<Formulario handleFetchInfo={handleFetchInfo}/>)
        }
        {
          view === "card" && (<Card {...values}/>)
        }
    </div>
  )
}

export default App
