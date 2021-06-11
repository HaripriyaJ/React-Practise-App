import React from 'react';
import '../common/styles/Card.scss';

const WelcomeCard = () => {
    return (
        <div className="welcome-card">
            <p className="title">Get Started!</p>
        </div>
    );
};

function Home() {
    return (
        <>
           <WelcomeCard />
        </>
    );
}
export default Home;