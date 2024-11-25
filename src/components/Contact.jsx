import React, { useState } from 'react';

const Contact = () => {

    //Inital Email State- Empty
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    //Inital Submit State- False (Not Submitted)
    const [submitted, setSubmitted] = useState(false);
    //Initial Error State- Empty (No Errors)
    const [error, setError] = useState('');

    //Updates Form Based On User Input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //Handles Submit to Web3Forms With Some Simple Validation Checks
    const handleSubmit = async (e) => {
        e.preventDefault();


        //Check All Field Filled Out
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setError('Please fill out all fields.');
        return;
        }


        // Web3Forms Endpoint
        const formEndpoint = 'https://api.web3forms.com/submit';
        
        const payload = {
        access_key: '2a070b4e-5bc5-4a2d-bf46-e70711922cd2',
        ...formData
        };

        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setError('');
            } 
            else {
                setError('Something went wrong. Please try again.');
            }
        } 
        catch (error) {
        setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="text-center mt-16">
            <h1 className="text-4xl mb-8">Contact Us</h1>
            {submitted ? (
                <p>Thank you for your message. We will get back to you soon!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-[500px] h-16 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-1 mb-1"
                        />
                    </div>

                    <div>
                        <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-[500px] h-16 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-1 mb-1"
                        />
                    </div>

                    <div>
                        <input
                        type="text"
                        name="subject"
                        placeholder="Email Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-[500px] h-16 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-1 mb-1"
                        />
                    </div>

                    <div>
                        <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-[500px] h-56 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-1 mb-1"
                        ></textarea>
                    </div>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button 
                    type="submit"
                    className="bg-blue-1 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 w-32 h-8"
                    >
                        Send Message
                    </button>
                </form>
            )
        }
        </div>
    );
};

export default Contact;
