import './App.css';
import Home from './screens/Home';
import { LunchMenu } from "./data/MealData"
import {useState} from "react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [currentMenu, setCurrentMenu] = useState(LunchMenu.menuItems);

  //Handle adding a new item to the menu
  const handleAddItem = (menuItem) => {
    setCurrentMenu(menu => [...menu, menuItem ])
    return toast.dark(`${menuItem.name} Have Been Added To The Menu!`, {
      pauseOnHover: true
  });
  }

   //Handle editing an exisiting item 
  const handleEditItem = (menuItem) => {
    console.log(`Edit ${menuItem.name}`)
    console.log(menuItem)
  }

    //Handle deleting an existing item 
    const handleDeleteItem = (menuItem) => {
      console.log(`Delete ${menuItem.name}`)
      console.log(menuItem)
    }

  return (
    <div className="App">
      <Home 
        handleAddItem={handleAddItem} 
        handleEditItem={handleEditItem} 
        handleDeleteItem={handleDeleteItem}
        currentMenu={currentMenu}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
