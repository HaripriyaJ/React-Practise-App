import React from 'react';
import { ISideNavBarOptions } from '../../interfaces/SideNavBar';
import Footer from './footer/Footer';
import SideNavBar from  './side-nav/SideNavBar';

const sideNavBarOptions: ISideNavBarOptions[] = [
    {
        name: 'users',
        displayText: 'Users',
        icon: 'users',
        title: 'User List',
        path: '/users'
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
            <SideNavBar options={sideNavBarOptions}/>
            <Footer />
        </>
    );
}
export default Home;