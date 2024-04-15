import React, { useState } from 'react'

 const UseEffect = () => {
 
    const[clicked ,setclicked]=useState();
    const[count , setCount] = useState(0);

    useState (() =>{
        alert('we r in use state')
    }, [clicked]);

   
  return (
    <div>
       <button onClick={() => setclicked('Virendra')}>Virendra</button>
       <br/>
       <hr/>
       <button onClick={() => setclicked('Kumar')}>Kumar</button>
       <br/>
       <hr/>
       <button onClick={() => setclicked('Paswan')}>Paswan</button>
      <h1>{clicked}</h1>
      <button onClick={() =>{setCount(count+1)}}>Increment</button>
      <h1>{count}</h1>
    </div>
  ) 
}
export default UseEffect;