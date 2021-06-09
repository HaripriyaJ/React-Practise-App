import React from 'react';
import './SearchField.scss';

function SearchField() {
    return (
        <div className="panel-block">
            <p className="control has-icons-left">
                <input className="input is-primary" type="text" placeholder="Search" />
                <span className="icon is-left">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </span>
            </p>
        </div>
    )
}

export default SearchField;