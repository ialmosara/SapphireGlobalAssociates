import React from 'react';
import ProfessionalDevelopment from '../../images/blocktabs/professional_development.png';
import Coaching from '../../images/blocktabs/coaching.png';
import Grant_Management from '../../images/blocktabs/grant_management.png';
import Event_Planning from '../../images/blocktabs/event_planning.jpg';
import Assessment_and_Accreditation from '../../images/blocktabs/assessment_accreditation.png';
import Project_Management from '../../images/blocktabs/project_management.jpg';
import Sustainability from '../../images/blocktabs/sustainability_initiatives.jpg';


const cards = [
    {
        name: 'Professional Development',
        pic: ProfessionalDevelopment,
        alt: 'Professional Development logo'
    }, {
        name: 'Group and Individual Coaching',
        pic: Coaching,
        alt: 'Group & Individual Coaching logo'
    }, {
        name: 'Grant Management',
        pic: Grant_Management,
        alt: 'Grant Management logo'
    }, {
        name: 'Event Planning',
        pic: Event_Planning,
        alt: 'Event Planning logo'
    }, {
        name: 'Assessment & Accreditation',
        pic: Assessment_and_Accreditation,
        alt: 'Assessment & Accreditation logo'
    }, {
        name: 'Project Management',
        pic: Project_Management,
        alt: 'Project Management logo'
    }, {
        name: 'Sustainability Initiatives',
        pic: Sustainability,
        alt: 'Sustainability_logo'
    },
];


const BlockTabs = () => {
    return (
        <div className='grid-padding0x'>
            {cards.map((card) => (
                <div className='card cell small-12 medium-6 large-3'> 
                    <div className='card-divider'>
                    {card.name}
                    </div>
                    {/* <img className='blocktab' src={card.pic} alt={card.alt}/> */}
                </div>
            ))}
        </div>
    )
}

const ServicesSection = () => {
    return (
        <div className="section">
            <div className="section-content" id='section1'>
                <h1 className='sectionTitle'>Services</h1>
                <p className='serviceSection'>
                    Sapphire Global Associates, LLC provides a growing list of services worldwide. Our member
                    Associates takes an extraordinary and intimate approach on managing small scale projects to
                    larger initiatives benefiting work industries, professional groups, individuals, local communities,
                    educational institutions, government, and others. Our consultation work is based on astonishing
                    completion of tasks, excellent work ethics with core values, and mindful to sustainable growth so
                    our clients can benefit from the reignition of themselves or their companies.
                </p>
                <BlockTabs />
            </div>
        </div>
    )
};

export default ServicesSection;