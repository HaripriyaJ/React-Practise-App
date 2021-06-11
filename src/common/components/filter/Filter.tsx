import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { IFilterList } from '../../../mock/Filter';
import { filterProjects } from '../../../slices/Project';
import './Filter.scss';

function Filter(props: {filterList: IFilterList[]}) {
    const { selectedFilter } = useSelector((state: RootStateOrAny) => state.projects);
    const dispatch = useDispatch();
    return (
        <div className="navbar-item is-clickable has-dropdown is-hoverable p-2">
            <i className="fa fa-filter is-clickable filter" aria-hidden="true" title="Filter"> Filter By</i>
            <div className="navbar-dropdown is-left">
                {props.filterList.map(filter => <span className="navbar-item filter-option" key={filter.name} 
                    onClick={() => dispatch(filterProjects(filter.action))}>
                        <span className={selectedFilter === filter.action ? 'highlight-text' : ''}>{filter.text}</span></span>)
                }
            </div>
        </div>
    );
}

export default Filter;