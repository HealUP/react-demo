import { useState } from "react";
import React from "react";
import "./css/update.css"

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    // function decreseClick() {
    //     setCount(count - 1);
    // }
    return (
        <><button onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>Button</span>
      </button>
        <h3>
            Clicked {count} times!
        </h3></>
    )
}

export default MyButton;