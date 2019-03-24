import React from 'react';

const Card = (props) => (
    <div>
        <div>{props.date}</div>
        <div>{props.text}</div>
    </div>
)

export default Card