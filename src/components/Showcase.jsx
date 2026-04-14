import { Link } from "react-router-dom";
import destinations from "../data/destinations";

const Showcase = () => {
    return (
        <section className='showcase'>
            <div className="container">
                {destinations.map(d => (
                    <div className={`row ${d.className}`} key={d.id}>
                        <div className="img-box">
                            <img src={d.image} alt="Image Description" />
                        </div>
                        <div className="text-box">
                            <h2 className='lg-heading text-black'>{d.title}</h2>
                            <p className='text-gray'>{d.desc}</p>
                            <Link to="/about" className='btn btn-secondary'>More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Showcase;
