import React from 'react';
import "./SearchBar.css";

const SearchBar = (props) => {
    const toggleSidebarIcon = props.toggleSidebar !== undefined ? <div onClick={() => props.toggleSidebar()} className="rde-searchbar-menu-icon"><i className="fas fa-bars fa-lg"></i></div> : null
    return (
        <div className="rde-searchbar-container">
            <div className="rde-searchbar">
                <div className="rde-searchbar-inner">
                    {toggleSidebarIcon}
                    <div className="rde-searchbox-container">
                        <input type="text" className="rde-searchbox" placeholder="Search your item here..." onChange={props.handleInputChange}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;