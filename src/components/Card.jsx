import React from 'react'

import { BiArrowFromBottom, BiLogoAndroid, BiLogoHtml5, BiWorld } from 'react-icons/bi';

const courses = [
    {
        title: '100+ Tournaments',
        icon: <BiLogoHtml5 />,
    },

    {
        title: 'Across the World',
        icon: <BiWorld />,
    },

    {
        title: 'For any Level \n Any Age',
        icon: <BiArrowFromBottom />,
    },



];

const Card = () => {
    return (
        <div className="card--container">
            {courses.map((item) => (
                <div className="card">
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}

        </div >
    );
};


export default Card
