import React, { useState } from 'react';
import datas from './datas.json';

const Data = () => {

  const [nData,setnData] = useState(datas);

  const handleRemove = (itemId) =>{
    setnData(nData.filter(item =>item.id!==itemId))
  }
  const handleUpdate =(itemId) =>{
    setnData(nData.map(item =>{
      if (item.id === itemId) {
        return{name:"newName"}
        
      }
      else{
        return item;
      }
    }))
  }
  
    return (
    <div>
    <ul>{
     nData.map(item=>
        <li key={item.id}>
          {item.name}
          <br/>
         < button onClick={() =>handleUpdate(item.id)}>Update</button>
          <button onClick={() =>handleRemove(item.id)}>Remove</button>

        </li>
     )
      }
    </ul>
    <button onClick={() => setnData([])}>Clear</button>
    </div>
  )
}


export default Data
