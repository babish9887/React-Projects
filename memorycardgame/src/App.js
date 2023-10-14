import React, {useState} from 'react';
import './App.css';
import CardComponent from './CardComponent';

function App() {
  const [trigger, settrigger]=useState(false);
  const handleclick=()=>{
    settrigger(true);
  }

  if(trigger){
    console.log(trigger);
    return(
      <div className="container">
        <CardComponent/>
      </div>
    )}
    else{
       return (
    <>
   <div className='Start'>
    <button onClick={handleclick} className='Startbtn'>Start Game</button>
   </div>
   </>
    );
    }
  }


export default App;
