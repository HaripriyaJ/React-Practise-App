import React from 'react';
import './Header.scss';

function Header() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-burger" data-target="userProfileOptions">
                <span></span>
                <span></span>
                <span></span>
            </div>  
            <div id="userProfileOptions" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <span className="navbar-link profile">
                            <img src="/assets/images/tania.jpg" alt="Profile" />
                        </span>
                        <div className="navbar-dropdown is-right">
                            <span className="navbar-item">
                                <i className="fa fa-user profile-options"></i>
                                My Profile
                            </span>
                            <hr className="navbar-divider" />
                            <span className="navbar-item">
                                <i className="fa fa-sign-out profile-options"></i>
                                Logout
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
