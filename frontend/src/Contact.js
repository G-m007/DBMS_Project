import React from 'react';
import './Contact.css';  // Optional for specific styles

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>If you have any questions or need assistance, feel free to reach out to us:</p>
            <ul>
                <li>Email: support@jobportal.com</li>
                <li>Phone: +123-456-7890</li>
                <li>Address: 123 Job Street, Hiring City, Jobland</li>
            </ul>
        </div>
    );
};

export default Contact;
