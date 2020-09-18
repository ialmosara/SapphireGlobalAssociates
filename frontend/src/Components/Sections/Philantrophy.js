import React from 'react';
import slides from '../data/slides.js';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const PhilantrophySection = () => {
    return (
        <div className="section">
            <div className="section-content" id='section3'>
                <h1 className='sectionTitle'>Philanthropy</h1>
                <p className="philantrophySection">
                    Sapphire Global Associates, LLC is committed to the worldview of philanthropic giving and
                    development. Percentage of its assets are gifted to a selected list of charities with missions to
                    transformation our world by effectively responding to assist in economic development,
                    livelihoods and longevity, social change, and improving issues we have brought upon ourselves
                    in our world.
                </p>

                <Slider autoplay="5000" className="slider-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${slide.image}') no-repeat center center` }}
                        >

                            <div className="inner">
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                                <a href={slide.link} className='button'>Website</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
};

export default PhilantrophySection;