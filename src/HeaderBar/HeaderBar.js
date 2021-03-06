import React from 'react';
import "./HeaderBar.css";

const HeaderBar = (props) => {
const toggleSidebarIcon = props.toggleSidebar !== undefined ? <div onClick={() => props.toggleSidebar()} className="rde-header-menu-icon"><i className="fas fa-bars fa-2x"></i></div> : null
const logo = props.logo !== undefined ? <div className="rde-logo-container"><img src={props.logo} className="rde-logo"/></div> : null
const userIcon = props.user !== undefined ? <div className="rde-user-icon"><i className="fas fa-user fa-lg"></i>  Welcome, {props.user}</div> : null
const menuItems = props.items ? <div className="rde-menu">{props.items.map(function(item){
return(<div className={item.name === props.active ? "rde-menu-item active" : "rde-menu-item"} onClick={() => props.onChange(item)}>{item.name}</div>)
})}</div> : null
  return (
    <div className="rde-header">
      {toggleSidebarIcon}
      {logo}
      {menuItems}
      {userIcon}
    </div>
  );
};

export default HeaderBar;
