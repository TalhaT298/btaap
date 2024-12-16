import React from 'react';
import Banner from '../Banner/Banner';
import Group from '../Group/Group';
import Moving from '../Moving/Moving';
import World from '../World/World';
import News from '../News/News';
import Responsibility from '../Responsibility/Responsibility';
import Help from '../Help/Help';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Group></Group>
            <Moving></Moving>
            <World></World>
            <News></News>
            <Responsibility></Responsibility>
            <Help></Help>
        </div>
    );
};

export default Home;