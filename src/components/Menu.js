import React from "react"
import MenuItem from "./MenuItem"
import { LunchMenu } from "../data/MealData"

const Menu = () => {

    return(
        <div id="menu-items-container">
            {LunchMenu.menuItems.map(menuItem => {
                return <MenuItem menuItem={menuItem} />
            })}
        </div>
    )
}

export default Menu