import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

const Modal = ({closeModal})=>{
    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e)=>e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Important Information</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    {/* <h3>React mega tutorial is live!</h3> */}
                    <p>The responses you fill on this page are not recorded and your message won’t be able to reach me because I have turned off the <b>Send Email</b> functionality.</p>
                    <p> Feel free to drop me a message on <a href="https://www.linkedin.com/in/dhruval-p/">LinkedIn</a></p>
                </div>
                <div className="lower-section">
                    <t onClick={closeModal} className="modal-btn btn-green">OK</t>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal