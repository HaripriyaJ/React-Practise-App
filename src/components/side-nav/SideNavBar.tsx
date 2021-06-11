import React from 'react';
import './SideNavBar.scss';
import logo from '../../logo.svg';
import { ISideNavBarOptions } from '../../interfaces/SideNavBar';
import { Link } from 'react-router-dom';

function SideNavBar(props: {options: ISideNavBarOptions[]}) {
    return (
        <>
            <section className="side-navbar">
                <div className="side-navbar-brand mr-1 mb-2 ml-1">
                    {/* Logo (or) brand Name */}
                    <img src={logo} className="app-logo" alt="logo" />
                    <h4>My React App</h4>
                </div>
                <nav className="side-navbar-menu mr-5 ml-5">
                    {props.options.map(option => 
                        <div key={option.name} id={option.name} className="side-navbar-item is-clickable mt-5 mb-5" title={option.title}>
                            <span className="nav-icon p-2">
                                <i className={"fa fa-" + option.icon}></i>
                            </span>
                            <Link to={option.path} className="icon-text pl-2">{option.displayText}</Link>
                        </div>) 
                    }        
                </nav>
            </section>
        </>
    );
}

export default SideNavBar;