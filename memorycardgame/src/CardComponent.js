import { useState } from 'react'


import './App.css';

export default function CardComponent(){

    const [card, setCard] = useState([
        { id: 1, img: '/img/html.png', style: "" },
        { id: 2, img: '/img/css.png', style: "" },
        { id: 3, img: '/img/js.png', style: "" },
        { id: 4, img: '/img/scss.png', style: "" },
        { id: 5, img: '/img/react.png', style: "" },
        { id: 6, img: '/img/vue.png', style: "" },
        { id: 7, img: '/img/angular.png', style: "" },
        { id: 8, img: '/img/nodejs.png', style: "" },
        { id: 1, img: '/img/html.png', style:"" },
        { id: 2, img: '/img/css.png', style: "" },
        { id: 3, img: '/img/js.png', style: "" },
        { id: 4, img: '/img/scss.png', style: "" },
        { id: 5, img: '/img/react.png', style: "" },
        { id: 6, img: '/img/vue.png', style: "" },
        { id: 7, img: '/img/angular.png', style: "" },
        { id: 8, img: '/img/nodejs.png', style: "" },
      ].sort(() => Math.random() - 0.5));
    
    const [prevclick, setprevclick]=useState(-1);
  

    const handleclick=  (el, index)=>{
      if(index===prevclick)
          return;

      if(card[index].style==="active correct"){
            console.log("Correct vasakye paxi kina thichnu paryo");
            return;
          }
      else if(prevclick===-1){
          console.log("another click");
          card[index].style="active";
          setCard([...card]);
          setprevclick(index);
          return;
        }
        else{
           if(card[index].id=== card[prevclick].id){
            card[index].style ="active correct";
            card[prevclick].style ="active correct";
          setCard([...card])
          setprevclick(-1);
        }
          else{
              card[index].style="active wrong ";
              card[prevclick].style="active wrong ";
              setCard([...card])
              setTimeout(()=>{
                card[index].style="";
                card[prevclick].style="";
                setCard([...card])
                setprevclick(-1);
              }, 500)
        }
      }

    }
    // const [restartstate, setRestartstate]=useState(false);
    // const handlerestart=()=>{
    //   setRestartstate(true);

    // }


    return(
      <>
        <div className="container">
        {card.map((el, index)=>{
          return(
            
             <div key={index} id={"myid"+index} className={" cardstyle "+el.style}  onClick={()=>handleclick(el, index)}>
               <img src={el.img} alt="" />
               </div>
             )
          
    })}
  </div>
  {/* <button className="Restartbtn" onClick={handlerestart}>Restart</button> */}
</>
    )
}

