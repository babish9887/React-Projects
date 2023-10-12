import could from './Assets/cloud.png';
import clear from './Assets/clear.png';
import drizzle from './Assets/drizzle.png';
import rain from './Assets/rain.png';
import search from './Assets/search.png';
import snow from './Assets/snow.png';
import windpic from './Assets/wind.png';
import humiditypic from './Assets/humidity.png';

import {useState} from 'react';
import './App.css';

function App() {
  const [wicon, setwicon]=useState();
  const[temp, setTemp]=useState("--");
  const[humidity, sethumidity]=useState("--");
  const[wind, setwind]=useState("--");
  const[location, setlocation]=useState("--");

  let apikey="0b75a0842ee402964c73520f85b4cf22";

  const handlesearch= async ()=>{
      const searchitem=document.querySelector(".searchitem");
      console.log(searchitem.value);
      if(searchitem.value==="")
          return;
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchitem.value}&units=Metric&appid=${apikey}`
      let response = await fetch(url);
      let data= await response.json();

       setTemp(data.main.temp);
       sethumidity(data.main.humidity);
       setwind(data.wind.speed);
       setlocation(searchitem.value);
      let icon=data.weather[0].icon;
      console.log(icon);
      searchitem.value="";

      if(icon==="01d" || icon==="01n")
        setwicon(clear);
      else if(icon==="02d" || icon==="02n")
        setwicon(could);
      else if(icon==="03d" || icon==="03n" || icon==="04d" || icon==="04n")
        setwicon(could);
      else if( icon==="09d" || icon==="09n")
        setwicon(rain);
      else if(icon==="10d" || icon==="10n")
        setwicon(drizzle);
      else if(icon==="13d" || icon==="13n")
        setwicon(snow);
      else
        setwicon(clear);
  }


  return (
   <>
    <div className="container">
    <div className="top">
      <input type="text" placeholder="Enter place here" className='searchitem'/>
      <button onClick={handlesearch} ><img src={search} alt="" /></button>
    </div>
    <div className="icon">
      <img src={wicon} alt="" />
    </div>
    <div className="info">
      <h1>{temp}<sup>o</sup>C</h1>
      <h3>{location}</h3>
    </div>
    <div className="otherinfo">
      <div className="humidity">
        <img src={humiditypic} alt="" />
       <div className="huminfo">
       <h4>{humidity} %</h4>
        <h5>humidity</h5>
       </div>
      </div>
      <div className="wind">
        <img src={windpic} alt="" />
        <div className="windinfo">
        <h4>{wind} Km/h</h4>
        <h5>Wind</h5>
        </div>
      </div>
    </div>
    </div>
   </>
  );
}

export default App;
