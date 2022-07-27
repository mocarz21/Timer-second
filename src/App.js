import './App.css';
import Button from './components/Button/Button';
import Time from './components/Time/Time';
import { useState, useEffect } from "react"

const App = () => {

  const [time, setTime] = useState(0)
  const [timer, setTimer]= useState(null)

  

  const start = ()=>{
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
     
    
  };
  
  const stop=()=>{
    
      clearInterval(timer);
      setTimer(null);
      console.log('stop');
  }
  const reset = () =>{
    setTime(0) 
    stop()
  }

  useEffect(() => {

    return ()=>{

    }
  },[time])
  

  return (
        <div className="App">
          <Time time={time}/>
          <Button start={start} stop={stop} reset={reset}/>
        </div>
    );
}

export default App;