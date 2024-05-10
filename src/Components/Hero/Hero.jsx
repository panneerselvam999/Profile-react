import "./Hero.css";
import dark_arrow from "../../assets/img/dark-arrow.png"


const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
                    voluptate quo? Magni, placeat culpa quasi excepturi omnis, cupiditate
                    similique dolore eos et natus voluptas dolor nulla sit alias
                    blanditiis a?
                </p>
                <button className="btn">Explore more <img src={dark_arrow} alt="Dark arrow" /></button>
            </div>
        </div>
    );
};

export default Hero;
