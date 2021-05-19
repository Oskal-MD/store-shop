import React from 'react';
import checkout from './checkout.svg';

function Checkout(props) {
    const filtr = props.database.filter((card) => {
        if(card.bought === true){
            return true
        } else {
            return false
        }
    })



    return (
        <div className="checkout">
            <a href="/#">
                <img src={checkout} alt="Checkout"/>
                <span className="counter">{filtr.length}</span>
            </a>
        </div>
    );
}

export default Checkout;