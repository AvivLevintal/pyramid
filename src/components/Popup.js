import React from 'react'
import '../MainPage.css'
const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={() =>props.setTrigger(false)} className="close-btn">close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
