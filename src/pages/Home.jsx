import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <header className='header'>
                <nav className='navbar'>
                    <Navbar />
                </nav>
                <Header />
            </header>
            <Showcase />
            <Features />
            <Footer />
        </>
    );
};

export default Home;
