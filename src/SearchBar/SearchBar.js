import React from 'react';
import "./SearchBar.css";

const SearchBar = (props) => {
    return (
        <div className="rde-searchbar-container">
            <div className="rde-searchbar">
                <div className="rde-searchbar-inner">
                    <div className="rde-searchbox-container">
                        <input type="text" className="rde-searchbox" placeholder="Search your item here..." onChange={props.handleInputChange}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;