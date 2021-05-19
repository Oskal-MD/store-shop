import React from 'react';
import Button from './Button';


function Card(props) {
    return (
        <div className="card">            
            <div class="card-image">
                <img src={props.card.image} alt="" />
            </div>
            <div class="card-info">
            <div class="card-name">{props.card.name}</div>
            <div class="card-price">{props.card.price} ₽</div>
                <Button bought={props.card.bought} id={props.card.id} setBought={props.setBought} />
            </div>
        </div>
    );
}

export default Card;