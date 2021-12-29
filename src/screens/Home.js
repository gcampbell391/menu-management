import React from "react"
import Header from "../components/Header";
import Menu from "../components/Menu";

const Home = (props) => {

    return(
        <div>
            <Header handleAddItem={props.handleAddItem}/>
            <h1>Woodstock Bar & Grill</h1>
            <Menu currentMenu={props.currentMenu} handleEditItem={props.handleEditItem} handleDeleteItem={props.handleDeleteItem}/>
        </div>
    )
}


export default Home;