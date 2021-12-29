import './App.css';
import Home from './screens/Home';
import { LunchMenu } from "./data/MealData"
import {useState} from "react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [currentMenu, setCurrentMenu] = useState(LunchMenu.menuItems);
  const [currentIndex, setCurrentIndex] = useState(currentMenu.length)

  //Handle adding a new item to the menu
  const handleAddItem = (menuItem) => {
    setCurrentMenu(menu => [...menu, menuItem ])
    console.log(currentMenu)
    setCurrentIndex(currentIndex + 1)
    return toast.dark(`${menuItem.name} were added to the menu!`, {
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
      const updatedMenu = currentMenu.filter(item => item.id !== menuItem.id)
      setCurrentMenu(updatedMenu)
      return toast.dark(`${menuItem.name} were removed from the menu.`, {
        pauseOnHover: true
    });
    }

  return (
    <div className="App">
      <Home 
        handleAddItem={handleAddItem} 
        handleEditItem={handleEditItem} 
        handleDeleteItem={handleDeleteItem}
        currentMenu={currentMenu}
        currentIndex={currentIndex}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
