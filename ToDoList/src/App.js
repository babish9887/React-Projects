import Alert from './Alert';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [check, setCheck] = useState([]);

  const handleAddItem = () => {
    const newItem = document.querySelector(".inputText").value;
    if(newItem===""){
      showalert("Please Enter a Task");
      return;
    }
    setList((items) =>[newItem, ...items]);
    setCheck((checked) => [false, ...checked]); 
    document.querySelector(".inputText").value = "";
  }

  const handlcheck = (el,i) => {
    let temp = [...check];
    temp[i] = true; 
    setCheck(temp);
    let newtemp=<s>{el}</s>
    let newarr=[...list];
    newarr[i]=newtemp;
    setList(newarr);
  }

  const handleDelete = (i) => {
    const newList = [...list];
    const newCheck = [...check];
    // newList.shift();
    newList.splice(i, 1);
    // newCheck.shift();
    newCheck.splice(i, 1);
    setList(newList);
    setCheck(newCheck);
  }
  const [alert, setAlert]=useState(null);
  const showalert = (message)=>{
    setAlert({
      msg:message, 
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <Alert alert={alert}/>
    <div className="container">
      <div className="additem">
        <input type="text" className='inputText' placeholder='Task to be done..' />
        <button type="button" className="btn btn-primary" onClick={handleAddItem}>Add</button>
      </div>
      <div className="itemlists">
        <ul>
          {list.map((el, i) => (
            <li key={i} >
               <input className="form-check-input"onChange={() => handlcheck(el,i)} checked={check[i]} type="checkbox" value="" id="flexCheckDefault"></input>
              {el}
              <button type="button" className="btn btn-primary" onClick={() => handleDelete(i)}> <i className="far fa-trash-alt"></i></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
