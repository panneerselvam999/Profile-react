import React from "react";
import "./About.css";

import about_img from "../../assets/img/about.png";
import play_icon from "../../assets/img/play-icon.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img" />
                <img src={play_icon} alt="" className="play-icon" />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt
                    omnis officiis sed enim nesciunt excepturi nulla, corporis
                    accusantium! Exercitationem obcaecati soluta quaerat quidem enim totam
                    nisi dolores molestiae delectus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt
                    omnis officiis sed enim nesciunt excepturi nulla, corporis
                    accusantium! Exercitationem obcaecati soluta quaerat quidem
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt
                    omnis officiis sed enim nesciunt excepturi nulla, corporis
                    accusantium! Exercitationem obcaecati soluta quaerat quidem enim totam
                    nisi dolores molestiae delectus.
                </p>
            </div>
        </div>
    );
};

export default About;
