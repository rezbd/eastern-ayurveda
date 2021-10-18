import React from 'react';
import Banner from '../Banner/Banner';
import Herbs from '../Herbs/Herbs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Herbs></Herbs>
        </div>
    );
};

export default Home;