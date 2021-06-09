import React from 'react';
import './SideNavBar.scss';
import logo from '../../../logo.svg';
import { ISideNavBarOptions } from '../../../interfaces/SideNavBar';
import { Link } from 'react-router-dom';

function SideNavBar(props: {options: ISideNavBarOptions[]}) {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">
                    {/* Logo (or) brand Name */}
                    <img src={logo} className="app-logo" alt="logo" />
                    <h4>My React App</h4>
                </div>
                <div className="navbar-menu">
                    {props.options.map(option => 
                        <div key={option.name} id={option.name} className="navbar-item" title={option.title}>
                            <span className="icon">
                                <i className={"fa fa-" + option.icon}></i>
                            </span>
                            <Link to={option.path} className="icon-text">{option.displayText}</Link>
                        </div>) 
                    }        
                </div>
            </nav>
        </>
    );
}

export default SideNavBar;