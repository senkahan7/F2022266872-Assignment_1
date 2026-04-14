import features from "../data/features";

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="box-wrapper">
                    {features.map(f => (
                        <div className={`box ${f.className}`} key={f.id}>
                            <i className={f.icon}></i>
                            <h2 className="md-heading">{f.title}</h2>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
