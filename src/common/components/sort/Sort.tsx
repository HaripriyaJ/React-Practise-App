import React from 'react';
import { useDispatch } from 'react-redux';
import { ISortList } from '../../../mock/Sort';
import { sortProjects } from '../../../slices/Project';

function Sort(props: {sortList: ISortList[]}) {
    const dispatch = useDispatch();
    return (
        <div className="navbar-item is-clickable has-dropdown is-hoverable p-2">
            <i className="fa fa-sort is-clickable filter" aria-hidden="true" title="Sort"> Sort By</i>
            <div className="navbar-dropdown is-right">
                {props.sortList.map(sort => 
                    <div className="navbar-item" key={sort.name} onClick={() => dispatch(sortProjects(sort.action))}>
                        <span className="mr-2">{sort.text}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sort;