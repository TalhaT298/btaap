import React from 'react';
import Banner from '../Banner/Banner';
import Group from '../Group/Group';
import Moving from '../Moving/Moving';
import World from '../World/World';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Group></Group>
            <Moving></Moving>
            <World></World>
        </div>
    );
};

export default Home;