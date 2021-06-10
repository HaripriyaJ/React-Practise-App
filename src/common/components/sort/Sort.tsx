import React from 'react';
import { ISortList } from '../../../mock/Sort';

function Sort(props: {sortList: ISortList[]}) {
    

    return (
        <div className="navbar-item is-clickable has-dropdown is-hoverable p-2">
            <i className="fa fa-sort is-clickable filter" aria-hidden="true" title="Sort"> Sort By</i>
            <div className="navbar-dropdown is-right">
                {props.sortList.map(sort => 
                    <div className="navbar-item" key={sort.name}>
                        <span className="mr-2">{sort.text}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sort;