import React from 'react';
import "./HeaderBar.css";

const HeaderBar = (props) => {
console.log("active",props.active )
const menuItems = <div className="rde-menu">{props.items.map(function(item){
return(<div className={item.name === props.active ? "rde-menu-item active" : "rde-menu-item"} onClick={() => {props.onChange(item),console.log("item",item.name)}}>{item.name}</div>)
})}</div>
  return (
    <div className="rde-header">
     {menuItems}
    </div>
  );
};

export default HeaderBar;
