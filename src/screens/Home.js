import React from "react"
import Header from "../components/Header";
import Menu from "../components/Menu";
import Radio from '@mui/material/Radio';

const Home = (props) => {

    return(
        <div>
            <Header handleAddItem={props.handleAddItem} currentIndex={props.currentIndex}/>
            <h1>Woodstock Bar & Grill</h1>
            <hr id="title-hr"/>
            <div>
                <Radio
                    checked={props.currentMenuType === 'Lunch'}
                    onChange={props.handleMenuTypeChange}
                    value="Lunch"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'Lunch Menu' }}
                />
                <Radio
                    checked={props.currentMenuType === 'Dinner'}
                    onChange={props.handleMenuTypeChange}
                    value="Dinner"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'Dinner Menu' }}
                />
                <Radio
                    checked={props.currentMenuType === 'Drink'}
                    onChange={props.handleMenuTypeChange}
                    value="Drink"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'Drink Menu' }}
                />
            </div>
            <h2>{props.currentMenuType} Menu</h2>
            <Menu currentMenu={props.currentMenu} handleEditItem={props.handleEditItem} handleDeleteItem={props.handleDeleteItem} />
        </div>
    )
}


export default Home;