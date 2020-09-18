import React from 'react';
import { Link } from "react-scroll";

const About = () => {
    return (
        <li>
            <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                About
              </Link>
        </li>
    )
};

export default About;