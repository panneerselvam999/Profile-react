import "./Navbar.css"
import logo from "../../assets/img/logo.png"
import { useEffect, useState } from "react"


const Navbar = () => {

    const [bgNav, setBgNav] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setBgNav(true) : setBgNav(false)
        })
    }, [])

    return (
        <nav className={`container ${bgNav ? "dark-nav" : ""}`}>
            <img src={logo} alt="Logo" className="logo" />
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