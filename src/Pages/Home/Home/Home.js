import React from 'react';
import Banner from '../Banner/Banner';
import Herbs from '../Herbs/Herbs';
import Services from '../Services/Services';
import Stats from '../Stats/Stats';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Herbs></Herbs>
            <Stats></Stats>
        </div>
    );
};

export default Home;