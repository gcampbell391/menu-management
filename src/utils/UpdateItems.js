//Function to add an item to the menu
export const addItem = (newItem, currentMenu) => {
    const updatedMenu = [...currentMenu, newItem]
    return updatedMenu
}

//Function to delete an item from the menu
export const deleteItem = (deleteItem, currentMenu) => {
    const updatedMenu = currentMenu.filter(item => item.id !== deleteItem.id)
    return updatedMenu
}

//Function to update an item from the menu
export const updateItem = (updatedItem, currentMenu) => {
    const updatedMenu = currentMenu.map(item => {
        if(item.id === updatedItem.id){
            return {...item, name: updatedItem.name, description: updatedItem.description, price: updatedItem.price, image: updatedItem.image}
        }
        return item
    })
    return updatedMenu
}