import React from 'react';
import { ISideNavBarOptions } from '../interfaces/SideNavBar';
import Footer from '../common/components/footer/Footer';
import Header from './header/Header';
import SideNavBar from  './side-nav/SideNavBar';

const sideNavBarOptions: ISideNavBarOptions[] = [
    {
        name: 'projects',
        displayText: 'Projects',
        icon: 'tasks',
        title: 'Project List',
        path: '/projects'
    },
    {
        name: 'todo',
        displayText: 'To Do',
        icon: 'pencil',
        title: 'ToDos List',
        path: '/todo'
    }
]

function Home() {
    return (
        <>
            <Header />
            <SideNavBar options={sideNavBarOptions}/>
            <Footer />
        </>
    );
}
export default Home;