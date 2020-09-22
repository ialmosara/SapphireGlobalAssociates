import React from 'react';
import { Link } from "react-scroll";

const Philantrophy = () => {
    return (
        <li>
            <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                Philanthropy
              </Link>
        </li>
    )
};

export default Philantrophy;