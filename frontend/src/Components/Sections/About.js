import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import axios from '../data/node_modules/axios';

import Background from '../../images/bg2.jpg';

const AboutSection = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const sendMail = () => {
        axios.post('http://sapphireglobalassociates.com/contact', {name, address, email, phoneNumber, message})
            .then(res => {
                console.log(res.data);
            });
        return;
    }

    return (
        <Parallax bgImage={Background}
        strength={700}>
        <div className="section text-center">
            <div className="section-content" id='section2'>
                <h1 className='sectionTitle'>About</h1>
                <p>Sapphire Global Associates, LLC <br />
                headquarter, California, USA<br />
                    <br />

                Mailing Address:<br />
                1267 Willis Street, Suite 200<br />
                Redding, CA 96001 </p>
                <h6 className="companyInfo"> Email: sapphireglobalassociates@gmail.com </h6>
                <h6 className="companyInfo"> Website: www.sapphireglobalassociates.com </h6>
                <h4 className="companyInfo"> INQUIRE AND EMAIL US </h4>

                <form className="grid-x" onSubmit={e => {
                    e.preventDefault();
                    sendMail(e.target.value);
                }}>
                    <label> NAME: </label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" />
                    <label> MAILING ADDRESS: </label>
                    <input value={address} onChange={e => setAddress(e.target.value)} type="text" />
                    <label> EMAIL:</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <label>PHONE #: </label>
                    <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="text" />
                    <label>INQUIRY MESSAGE: </label>
                    <input value={message} onChange={e => setMessage(e.target.value)} type="text" />
                    <input type="submit" />
                </form>
            </div>
        </div>
        </Parallax>
    )
};

export default AboutSection;