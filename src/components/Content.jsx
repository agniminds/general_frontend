import React from 'react'
import ContentHeader from './ContentHeader';
import Card from './Card';
import '../styles/content.css';
import FindMore from './FindMore';


const Content = () => {
    return (
        <div className='content'>
            <ContentHeader />
            <Card />
            <FindMore />

        </div>

    );
};

export default Content;
