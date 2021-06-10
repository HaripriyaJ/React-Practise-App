import React from 'react';
import { IFilterList } from '../../../mock/Filter';
import './Filter.scss';

function Filter(props: {filterList: IFilterList[]}) {
    return (
        <div className="navbar-item is-clickable has-dropdown is-hoverable p-2">
            <i className="fa fa-filter is-clickable filter" aria-hidden="true" title="Filter"> Filter By</i>
            <div className="navbar-dropdown is-left">
                {props.filterList.map(filter => <span className="navbar-item filter-option" key={filter.name}>{filter.text}</span>)}
            </div>
        </div>
    );
}

export default Filter;