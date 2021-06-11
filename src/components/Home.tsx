import React from 'react';
import '../common/styles/Card.scss';

export const StyledCard = (props: any) => {
    return (
        <div className="welcome-card">
            <p className="title">{props.text}</p>
        </div>
    );
};

function Home() {
    return (
        <>
           <StyledCard  text="Get Started!"/>
        </>
    );
}
export default Home;