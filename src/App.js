import './App.css';
import Home from './screens/Home';
import { Lunch, Dinner, Drink } from "./data/MealData"
import {useState} from "react"
import {addItem, deleteItem, updateItem} from "./utils/UpdateItems.js"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [currentLunchMenu, setCurrentLunchMenu] = useState(Lunch.menuItems)
  const [currentDinnerMenu, setCurrentDinnerMenu] = useState(Dinner.menuItems)
  const [currentDrinkMenu, setCurrentDrinkMenu] = useState(Drink.menuItems)
  const [currentMenu, setCurrentMenu] = useState(Lunch.menuItems);
  const [currentMenuType, setCurrentMenuType] = useState(Lunch.menuType);
  const [currentIndex, setCurrentIndex] = useState(currentMenu.length)

  
  //Handle adding a new item to the menu
  const handleAddItem = (menuItem) => {
    //Call method to add an item
    const updatedMenu = addItem(menuItem, currentMenu)
    setCurrentMenu(updatedMenu)
    switch(currentMenuType){
      case 'Lunch':
        setCurrentLunchMenu(menu => [...menu, menuItem ])
        break;
      case 'Dinner':
        setCurrentDinnerMenu(menu => [...menu, menuItem ])
        break;
      case 'Drink':
        setCurrentDrinkMenu(menu => [...menu, menuItem ])
        break;
      default:
        console.log("Something went wrong.")
    }
    setCurrentIndex(currentIndex + 1)
    return toast.dark(`${menuItem.name} were added to the menu!`);
  }

   //Handle editing an exisiting item 
  const handleEditItem = (updatedItem) => {
    //Call method to update an item
    const updatedMenu = updateItem(updatedItem, currentMenu)
    setCurrentMenu(updatedMenu);
    switch(currentMenuType){
      case 'Lunch':
        setCurrentLunchMenu(updatedMenu)
        break;
      case 'Dinner':
        setCurrentDinnerMenu(updatedMenu)
        break;
      case 'Drink':
        setCurrentDrinkMenu(updatedMenu)
        break;
      default:
        console.log("Something went wrong.")
    }
    return toast.dark(`${updatedItem.name} were successfully updated!`);
  }

    //Handle deleting an existing item 
    const handleDeleteItem = (menuItem) => {
      //Call method to delete an item
      const updatedMenu = deleteItem(menuItem, currentMenu)
      setCurrentMenu(updatedMenu)
      switch(currentMenuType){
        case 'Lunch':
          setCurrentLunchMenu(updatedMenu)
          break;
        case 'Dinner':
          setCurrentDinnerMenu(updatedMenu)
          break;
        case 'Drink':
          setCurrentDrinkMenu(updatedMenu)
          break;
        default:
          console.log("Something went wrong.")
      }
      return toast.dark(`${menuItem.name} were removed from the menu!`);
    }

    //Handles changing dashboard for different menu types
    const handleMenuTypeChange = (event) => {
      console.log(event.target.value)
      if(event.target.value === "Lunch"){
        setCurrentMenu(currentLunchMenu)
        setCurrentMenuType(Lunch.menuType)
      }
      else if(event.target.value === "Dinner"){
        setCurrentMenu(currentDinnerMenu)
        setCurrentMenuType(Dinner.menuType)
      }
      else if(event.target.value === "Drink"){
        setCurrentMenu(currentDrinkMenu)
        setCurrentMenuType(Drink.menuType)
      }
    }

  return (
    <div className="App">
      <Home 
        handleAddItem={handleAddItem} 
        handleEditItem={handleEditItem} 
        handleDeleteItem={handleDeleteItem}
        currentMenu={currentMenu}
        currentIndex={currentIndex}
        currentMenuType={currentMenuType}
        handleMenuTypeChange={handleMenuTypeChange}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
