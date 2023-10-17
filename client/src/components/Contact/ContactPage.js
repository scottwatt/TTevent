import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './ContactPage.css'; // Import your CSS styles

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        phoneNumber: '',
        companyName: '',
        howCanWeHelp: '',
        userType: '',
        comments: '',
    });

    const [isVerified, setIsVerified] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRecaptchaChange = (value) => {
        setIsVerified(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isVerified) {
            alert("Please verify that you're not a robot.");
            return;
        }

        // Handle form submission here (e.g., send data to a server)
        console.log(formData);

        // Reset the form after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            phoneNumber: '',
            companyName: '',
            howCanWeHelp: '',
            userType: '',
            comments: '',
        });
    };

    return (
        <div className="contact-container">
            <div className="map-container">
                {/* Replace this iframe with your map's iframe or embed code */}
                <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyAAshbVZnCwZ8A8OZz36RBliRnTAAFIh6M&parameters"> 
                    frameborder="0" 
                    allowfullscreen=""
                    aria-hidden="false" 
                    tabindex="0">
                </iframe>
            </div>
            <div className='form-container'>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name *</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmEmail">Confirm Email Address</label>
                        <input
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number *</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="howCanWeHelp">How can we help you today?</label>
                        <input
                            type="text"
                            id="howCanWeHelp"
                            name="howCanWeHelp"
                            value={formData.howCanWeHelp}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="userType">Which best describes you?</label>
                        <select
                            id="userType"
                            name="userType"
                            value={formData.userType}
                            onChange={handleChange}
                        >
                            <option value="">Select One</option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="comments">Your Comments or Message</label>
                        <textarea
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <ReCAPTCHA
                            sitekey="6LfZwacoAAAAAI2J-gfp8j8VKVCj4NaB2quxRQ-T" 
                            onChange={handleRecaptchaChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
