import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/img/msg-icon.png";
import mail_icon from "../../assets/img/mail-icon.png";
import phone_icon from "../../assets/img/phone-icon.png";
import location_icon from "../../assets/img/location-icon.png";
import white_arrow from "../../assets/img/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "175658be-ac07-48ef-b973-b86b7d2b28e7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    send us a message <img src={msg_icon} alt="" />
                </h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae
                    autem rem! Asperiores perspiciatis, quia qui voluptatibus mollitia
                    pariatur tempore repellendus natus sint fuga dolorum nobis omnis
                    nostrum error voluptatem?
                </p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="" /> Contact@gmail.com
                    </li>
                    <li>
                        <img src={phone_icon} alt="" /> +1 123-456-7890
                    </li>
                    <li>
                        <img src={location_icon} alt="" />
                        1/211-A, Arthanari Street,
                        <br /> Meyyanur, Salem-4
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                    />
                    <label htmlFor="phone">Your name</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Enter your mobile number"
                    />
                    <textarea
                        name="message"
                        id="message"
                        rows={6}
                        placeholder="Enter your message"
                    ></textarea>
                    <button type="submit" className="btn dark-btn">
                        Submit now
                        <img src={white_arrow} alt="" />
                    </button>
                </form>
                <span className="send-msg">{result}</span>
            </div>
        </div>
    );
};

export default Contact;
