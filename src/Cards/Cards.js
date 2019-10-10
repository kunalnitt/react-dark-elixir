import React from 'react';
import "./Cards.css";

const Cards = (props) => {
    const itemName = <div className="rde-cards-title">{props.itemName}</div>
    const itemImage = <div className="rde-cards-image-container"></div>
    const itemPrice = <div className="rde-cards-price">Price - &#8377; {props.itemPrice}</div>
    const itemDetails = <div className="rde-cards-description-body">{props.itemDetails}</div>
      return (
        <div className="rde-cards-container">
            <div className="rde-cards">
                <div className="rde-cards-inner">
                    {itemName}
                    {itemImage}
                    {itemPrice}
                    <div className="rde-cards-description">
                        <div className="rde-cards-description-title">Product Description</div>
                        {itemDetails}
                    </div>
                    <div className="rde-cards-expand-icon"><i className="fas fa-angle-double-down fa-lg"></i></div>
                </div>
            </div>
        </div>
      );
    };
    
    export default Cards;