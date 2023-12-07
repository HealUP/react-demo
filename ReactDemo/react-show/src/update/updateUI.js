import { useState } from "react";
import React from "react";
import "./css/update.css"
function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function decreseClick() {
        setCount(count - 1);
    }
    return (
        <><button onClick={handleClick} className="buton">
       +
    </button>
        <h3 onClick={handleClick} className="buton">
            Clicked {count} times!
        </h3>
        <button onClick={decreseClick} className="buton">
            -
            </button></>
    )
}

export default MyButton;