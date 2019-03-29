import React from 'react';

const Card = (props) => (
    <div className="card">
        <div className="card-body">
            <div>{props.date}</div>
            <div>{props.text}</div>
        </div>
    </div>
)

export default Card