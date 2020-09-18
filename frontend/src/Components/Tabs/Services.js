import React from 'react';
import { Link } from "react-scroll";

const Services = () => {
    return (
        <li>
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                Services 
              </Link>
        </li>
    )
};

export default Services;