import React from 'react';
import Card from '../Card/Card.js'

const CardList = (props) => (
    <div>
        Limit number of cards to {props.top}
        <Card top={99}/>
    </div>
)


export default CardList