import { useState } from 'react'
import "./UseState.css"



const UseState = () => {
  console.log(useState('light'))
  const [ theme, setTheme] = useState('light')
  const [count, setCount] = useState(0)



  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      {/* <button
        onClick={ () => setTheme("dark")}
      >
        Dark
      </button>
      <button
        onClick={ () => setTheme("light")}
      >
        Light
      </button> */}
      <button onClick={ () => theme === "light" ? setTheme('dark') : setTheme("light") }>
        Toggle Theme
      </button>
      <h2>DISPLAY COUNT HERE: { count }</h2>
      <button
        onClick={ () => setCount( prevCount => prevCount + 1)}
      >
        Increment
      </button>
      <button
        onClick={ () => setCount( prevCount => prevCount - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
