import React from 'react';
import "./HeaderBar.css";
import "@fortawesome/fontawesome-free/js/all.js"
import "@fortawesome/fontawesome-free/css/all.css"

const HeaderBar = (props) => {
const toggleSidebarIcon = props.toggleSidebar !== undefined ? <div onClick={() => props.toggleSidebar()} className="rde-menu-icon"><i className="fas fa-bars fa-lg"></i></div> : null
const menuItems = <div className="rde-menu">{props.items.map(function(item){
return(<div className={item.name === props.active ? "rde-menu-item active" : "rde-menu-item"} onClick={() => props.onChange(item)}>{item.name}</div>)
})}</div>
  return (
    <div className="rde-header">
      {toggleSidebarIcon}
      {menuItems}
    </div>
  );
};

export default HeaderBar;
