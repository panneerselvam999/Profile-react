import "./Navbar.css"
import logo from "../../assets/img/logo.png"


const Navbar = () => {
    return (
        <nav className="container">
            <img src={logo} alt="Logo" className="logo"/>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About Us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className="btn">Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar