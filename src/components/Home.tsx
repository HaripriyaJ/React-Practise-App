import React from 'react';
import Header from './header/Header';
import SideNavBar from  './side-nav/SideNavBar';
import ContentArea from '../common/components/content/Content';
import { sideNavBarOptions } from '../mock/SideNavBar';
import '../common/styles/Card.scss';
import ProjectList from '../common/components/project/ProjectList';

// const WelcomeCard = () => {
//     return (
//         <div className="welcome-card">
//             <p className="title">Get Started!</p>
//         </div>
//     );
// };

function Home() {
    return (
        <>
            <Header />
            <main>
                <SideNavBar options={sideNavBarOptions}/>
                <ContentArea>
                    <ProjectList/>
                </ContentArea>
            </main>
        </>
    );
}
export default Home;