import  { useState } from 'react';

const Button = () => {
let[count,setCount] = useState(0)
  return (
    <> 
    <button onClick={()=>setCount(count+1)}>
       Increase the  Count value
    </button>
    <button onClick={()=>setCount(count-1)}>
       Decrease  the  Count value
    </button>
    <h1>The value of Count is : {count}</h1>
   </>
   
  );
};

export default Button;
