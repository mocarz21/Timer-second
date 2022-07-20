import './App.css';
import Button from './components/Button/Button';
import Time from './components/Time/Time';
import { useState, useEffect } from "react"

const App = () => {

  const [time, setTime] = useState(0)

  const start = ()=>{
    setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1)
    
  };
  
  const stop=()=>{
    
      clearInterval(time);
      console.log('sada')
  }
  const reset = () =>{
    setTime(0)
  }
  

  return (
        <div className="App">
          <Button start={start} stop={stop} reset={reset}/>
          <Time time={time}/>
        </div>
    );
}

export default App;