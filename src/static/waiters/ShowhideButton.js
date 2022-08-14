import React, { useState } from "react";

export default function ToggleVisibility({ children }) {
    const [show, setShow] = useState();

    function toggleShow() {
        setShow(!show);
    }

    let buttonText = show ? "Hide Waiters" : "Show Waiters";
    return (
        <div className="wrapper">
            <h1 > Waiters</h1>
            <button className='button_menu' onClick={toggleShow}>{buttonText}</button>
            {show && children}

        </div>
    );
}