import React from 'react';
import Header from '../../components/header/Header';
import SideNavBar from '../../components/side-nav/SideNavBar';
import { sideNavBarOptions } from '../../mock/SideNavBar';
import ContentArea from './content/Content';

export default function MainLayout(props:any) {
    return (
        <>
            <Header />
            <main>
                <SideNavBar options={sideNavBarOptions}/>
                <ContentArea>
                    {props.children}
                </ContentArea>
            </main>
        </>
    );
}