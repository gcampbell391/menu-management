import React from "react"
import MenuItem from "./MenuItem"

const Menu = (props) => {

    return(
        <div id="menu-items-container">
            {props.currentMenu.map(menuItem => {
                return <MenuItem menuItem={menuItem} handleEditItem={props.handleEditItem} handleDeleteItem={props.handleDeleteItem} key={menuItem.id}/>
            })}
        </div>
    )
}

export default Menu