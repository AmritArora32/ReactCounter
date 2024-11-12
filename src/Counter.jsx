import { useState } from "react";
const Counter = () => {
  const stateObj = useState(0);
  const count = stateObj[0]; // value
  const setCount = stateObj[1]; // function
  // using destructurig of above 3 lines
  // const [count,setCount] = useState(0);

  console.log(count);
  
  return (
    <div class="counter">
            <h1 class="counter-title">Counter</h1>
            <div class="counter-value">{count}</div>
            <div class="counter-control">
                <button onClick={() => 
                  setCount(count-1)} class="counter-decrement">-</button>

                <button onClick={() => 
                  setCount(count+1)} class="counter-increment">+</button>
            </div>
        </div>
  )
}

export default Counter
