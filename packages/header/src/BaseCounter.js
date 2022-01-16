import React, { useState } from "react"

const BaseCounter = () => {
    const [count, setCount] = useState(0);
    if (count > 10) {
        setCount(0);
    }
    return (<div style={{ height: 100, width: "100%", backgroundColor: "blue" }}>
        <span style={{ color: "white" }}>This is a Base Counter {count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>)
}

export default BaseCounter;