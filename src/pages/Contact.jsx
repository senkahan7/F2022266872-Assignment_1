import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        message: " "
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <nav className='navbar bg-dark'>
                <Navbar />
            </nav>

            <section className="contact-form">
                <div className="container">
                    <div className="form-wrapper">
                        <div className="company-address">
                            <div className="address-group">
                                <i className="fas fa-map-marker-alt fa-3x text-red"></i>
                                <h2 className="text-gray md-heading">Location</h2>
                                <p>#2661 Janakpuri Colony, city name, town name</p>
                            </div>
                            <div className="address-group">
                                <i className="far fa-envelope fa-3x text-red"></i>
                                <h2 className="text-gray md-heading">Email</h2>
                                <p>harshitvashisth@mycompany.com</p>
                            </div>
                            <div className="address-group">
                                <i className=" fas fa-phone-square-alt fa-3x text-red"></i>
                                <h2 className="text-gray md-heading">Call</h2>
                                <p>+910101010101</p>
                            </div>
                            <img src="./img/company-img.jpg" alt="Company Image" />
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <h1 className="lg-heading text-black">Contact Us</h1>
                            <p className="text-gray">Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" value={formData.username} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" value={formData.message} onChange={handleChange}> </textarea>
                            </div>
                            <button type="submit" className='form-btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    );
};

export default Contact;
