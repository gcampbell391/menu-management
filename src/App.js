import './App.css';
import Home from './screens/Home';
import { Lunch, Dinner, Drink } from "./data/MealData"
import {useState} from "react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [currentMenu, setCurrentMenu] = useState(Lunch.menuItems);
  const [currentMenuType, setCurrentMenuType] = useState(Lunch.menuType);
  const [currentIndex, setCurrentIndex] = useState(currentMenu.length)

  //Handle adding a new item to the menu
  const handleAddItem = (menuItem) => {
    setCurrentMenu(menu => [...menu, menuItem ])
    console.log(currentMenu)
    setCurrentIndex(currentIndex + 1)
    return toast.dark(`${menuItem.name} were added to the menu!`);
  }

   //Handle editing an exisiting item 
  const handleEditItem = (updatedItem) => {
    //Find menu item by id, and update it's fields accordingly
    const updatedMenu = currentMenu.map(item => {
      if(item.id === updatedItem.id){
        return {...item, name: updatedItem.name, description: updatedItem.description, price: updatedItem.price, image: updatedItem.image}
      }
      return item
    })
    setCurrentMenu(updatedMenu);
    return toast.dark(`${updatedItem.name} were successfully updated!`);
  }

    //Handle deleting an existing item 
    const handleDeleteItem = (menuItem) => {
      const updatedMenu = currentMenu.filter(item => item.id !== menuItem.id)
      setCurrentMenu(updatedMenu)
      return toast.dark(`${menuItem.name} were removed from the menu!`);
    }

    //Handles changing dashboard for different menu types
    const handleMenuTypeChange = (event) => {
      console.log(event.target.value)
      if(event.target.value === "Lunch"){
        setCurrentMenu(Lunch.menuItems)
        setCurrentMenuType(Lunch.menuType)
      }
      else if(event.target.value === "Dinner"){
        setCurrentMenu(Dinner.menuItems)
        setCurrentMenuType(Dinner.menuType)
      }
      else if(event.target.value === "Drink"){
        setCurrentMenu(Drink.menuItems)
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
