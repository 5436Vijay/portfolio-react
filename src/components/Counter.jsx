import { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/counter.css"

// Ques - Batch Processing
// Ques - Inner div center using two methods

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counthead">
      <div className="countcard">
        <div className="count">
          <h1>Counter : {count}</h1>
        </div>
        <br />
        <Button
          onClick={() => setCount(count + 1)}
          style={{ marginRight: "20px" }}
        >
          Increase
        </Button>
        <Button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          style={{ marginRight: "20px" }}
        >
          Decrease
        </Button>
        <Button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </Button>
        {/* <Button onClick={()=>{handle()}} >Test</Button> */}
      </div>
    </div>
  );
};
export default Counter;
