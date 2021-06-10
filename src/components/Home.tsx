import React from 'react';
import Footer from '../common/components/footer/Footer';
import Header from './header/Header';
import SideNavBar from  './side-nav/SideNavBar';
import ProjectCard from '../common/components/project/card/ProjectCard';
import ContentArea from '../common/components/content/Content';
import { sideNavBarOptions } from '../mock/SideNavBar';
import { projects } from '../mock/Projects';

function Home() {
    return (
        <>
            <Header />
            <main>
                <SideNavBar options={sideNavBarOptions}/>
                <ContentArea>
                    <ProjectCard  list={projects}/>
                </ContentArea>
            </main>
            <Footer />
        </>
    );
}
export default Home;