import React from "react"
import NewItemForm from "./NewItemForm";


const Header = (props) => {

    return(
        <div id="header-flex-box">
            <div id="header-flex-box-left">
                <h1>Menu Management</h1>
            </div>
            <div id="header-flex-box-right">
                <NewItemForm handleAddItem={props.handleAddItem} currentIndex={props.currentIndex}/>
            </div>
        </div>
    )
}

export default Header