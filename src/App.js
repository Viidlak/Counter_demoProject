
import './App.css';
import Display from './components/Display';
import Random from './components/Random';
import { useState } from 'react';
import Counter from './components/Counter';
function App() {
  const[username, setUsername]=useState('Max')
  const[lName,setlname]=useState('Willam')

const [counter, setCounter]= useState(0)

const handleClick=()=>{
  setCounter(counter+1)
}

  console.log(username)
  // const handleClick = ()=>{
  //   alert('i was clicked')
  // }
  return (
    <p>
    
    <div className="App">
      <header className="container text-center">
       <h1>App Functional Component</h1>
       <p>Username is:{username}</p>
       <button onClick={handleClick}>Click Me</button>
       <h3>App Functional Component</h3>

       <Display fname={username} lname={lName}/>
       <h3>class component</h3>
       <Random/>
<Counter/>
{/* counter App */}

<h1 className='text-primary mt-5'>Counter Application</h1>
<h2 className='text-danger'>{counter}</h2>
<button className='btn btn-primary' onClick={handleClick}>increment</button>








      </header>
    </div>
    </p>
  );
}

export default App;
