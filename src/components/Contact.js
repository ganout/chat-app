import React from 'react';
import './Contact.css';

function Contact() {

    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/women/50.jpg" />
            <div>
                <h4 className="name">Jane Milani</h4>
                <div className="status">
                    <div className="status-online"></div>
                    <p className="status-text">online</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
