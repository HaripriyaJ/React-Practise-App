import React from 'react';
import './Content.scss';

function ContentArea(props:any) {
    const { children } = props;
    return (
        <div className="main-content mt-4">
            { children }
        </div>
    );
}
export default ContentArea;