import React from 'react';
import "./Cards.css";

const Cards = (props) => {
      return (
        <div className="rde-cards">
            <div className="rde-cards-inner">
                <div className="rde-cards-title">Item Name</div>
                <div className="rde-cards-image-container"></div>
                <div className="rde-cards-price">Price - &#8377; 10</div>
                <div className="rde-cards-description">
                    <div className="rde-cards-description-title">Product Description</div>
                    <div className="rde-cards-description-body">Detailed Description of the product is provided here. Please provide more details bla bla bla</div>
                </div>
                <div className="rde-cards-expand-icon"><i className="fas fa-angle-double-down fa-lg"></i></div>
            </div>
        </div>
      );
    };
    
    export default Cards;