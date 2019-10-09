import React from 'react';
import "./SideBar.css";

const SideBar = (props) => {
const header = props.header ? <div className="rde-sidebar-header"><h3>{props.header}</h3></div> : null
const menuItems = <div className="rde-sidebar-menu">{props.items.map(function(item){
  return(
      !item.list ? <div className={item.name === props.active ? "rde-sidebar-menu-item active" : "rde-sidebar-menu-item"} 
      onClick={() => props.onChange(item)}>{item.name}</div> : <div>
      <div className="rde-sidebar-menu-dropdown">{item.name}<div className="rde-caret"><i class="fas fa-caret-down"></i></div></div>
      <div className={item.list.map(function(listItem){return (listItem.name)}).includes(props.active) ? "rde-sidebar-menu-dropdown-content.active" : "rde-sidebar-menu-dropdown-content"}>{item.list.map(function(listItem){
        return(<div className={listItem.name === props.active ? "rde-sidebar-menu-dropdown-item active" : "rde-sidebar-menu-dropdown-item"} onClick={() => props.onChange(listItem)}>{listItem.name}</div>)
    })}</div></div>
  )
})}</div>
  return (
    <div className={props.showSidebar===undefined || props.showSidebar ? "rde-sidebar" : "rde-sidebar active"}>
        {header}
        {menuItems}
    </div>
  );
};

export default SideBar;
