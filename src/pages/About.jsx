import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { listItems, stats } from "../data/aboutData";

const About = () => {
    return (
        <>
            <nav className='navbar bg-dark'>
                <Navbar />
            </nav>

            <section className="about">
                <div className="container">
                    <h2 className='lg-heading text-black about-heading'>About Us</h2>
                    <p className="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam pariatur, eum veritatis minima tempore laborum ad aspernatur quod itaque. Nostrum.</p>
                    <div className="about-wrapper">
                         <div className="left">
                             <ul>
                                 {listItems.map((item, index) => <li key={index}>{item}</li>)}
                             </ul>
                         </div>
                         <div className="right">
                            <ul>
                                {listItems.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                         </div>
                    </div>

                    <div className="counts">
                        {stats.map(stat => (
                            <div className={`count-item ${stat.className}`} key={stat.id}>
                                <span>{stat.count}</span> 
                                <p>{stat.label}</p>   
                            </div>
                        ))}
                    </div>

                    <div className="cta-banner">
                        <div className="cta-banner-left">
                            <p className="cta-line">What are you waiting for, reach us right now.</p>
                        </div>
                        <div className="cta-banner-right">
                            <Link to="/contact" className='btn-cta'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
