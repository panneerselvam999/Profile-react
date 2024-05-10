import "./Navbar.css";
import logo from "../../assets/img/logo.png";
import menu_icon from "../../assets/img/menu-icon.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [bgNav, setBgNav] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setBgNav(true) : setBgNav(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };

    return (
        <nav className={`container ${bgNav ? "dark-nav" : ""}`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul className={mobileMenu ? "" : "toggle-mobile-menu"}>
                <li>
                    <Link to="hero" smooth={true} duration={500} offset={-260}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="programs" smooth={true} duration={500} offset={-260}>
                        Program
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} offset={-150}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="campus" smooth={true} duration={500} offset={-260}>
                        Campus
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} duration={500} offset={-260}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} offset={-260}>
                        <button className="btn">Contact Us</button>
                    </Link>
                </li>
            </ul>
            <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
