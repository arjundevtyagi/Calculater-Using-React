import Input from './components/Input';
import Button from './components/ButtonContainer';
import design from './App.module.css';
import { useState } from 'react';

function App() {

  const btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    "."     ];

  let  [calVal , setCalVal] = useState("");

  const onBtnClickk = (btn)=>{  //this btn value comes fron the button container compoinent as an argumemnt
      if(btn === "C")
         {
          setCalVal("");
        }
      else if(btn === "="){
          const result = eval(calVal);
          setCalVal(`= ${result}`);
      }  
      else
        { 
          // setCalVal( (preVal)=> preVal + btn );  //shorthand notation
          let newVal = calVal + btn;
          setCalVal(newVal);
          console.log(btn);
          
        }
  
    
  }

  // let keyPress = (event)=>{  currently taking input from the keyboard is on the hold
  //  if((event.key) === ("1" || "2" || "3" || "4" || "5" ||"6" || "7" ||"8" || "9" ||"0" || "+" ||"-" || "*" ||"/" || ".")){
  //   setCalVal((val)=> (event.key) + val);
  //  }
  //  else{
  //   console.log("dlk");
    
  //  }
   
  // }

  

  return (
  <div className={design.calculator}>
     <Input displayVal = {calVal}  />
    <Button onBtnClick= {onBtnClickk} btns={btns}/>
  </div>
 )
}
export default App;
