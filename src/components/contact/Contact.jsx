import React from 'react'
import "./contact.css";

function Contact() {
  return (
    <>
    <div className='contact'>
      <div className="leftBar">
        <h3 className="inquiries">Inquiries:</h3>
        <p>Please fill out the form on the right or email directly at </p>
        <span>akshatkhemka07@gmail.com</span>
      </div>
      <div className="rightBar">
        <p className="info">
          Name*
        </p>
        <input type="text" />
        <p className="info">
          Email*
        </p>
        <input type="text" />
        <p className="info">
          Subject:
        </p>
        <input type="text" />
        <p className="info">
          Project Summary*
        </p>
        <textarea className="summary"></textarea>
        <button className="send">send</button>
      </div>
    </div>
    </>
  )
}

export default Contact
