import { addItem, deleteItem, updateItem } from "../utils/UpdateItems"

//Mock data for testing
const newItem =   {
    id: 6,
    name: "Flatbread Pizza",
    description: "Freshed tossed dough topped with local garden vegetables, Italian seasonings, and mozzarella cheese.",
    price: "13.50",
    image: "https://i.ibb.co/ZLkNkyw/flatbread-Pizza.jpg"
}

const removeItem = {
    id: 1,
    name: "Cheeseburger",
    description: "An extremely popular sandwich consisting of one or more meat patties placed in a bun with American cheese.",
    price: "14.99",
    image: "https://i.ibb.co/hYzy23C/pexels-photo-1639557.jpg"
}

const updatedItem = {
    id: 1,
    name: "Double Cheeseburger",
    description: "An extremely popular sandwich consisting of one or more meat patties placed in a bun with American cheese.",
    price: "19.99",
    image: "https://i.ibb.co/hYzy23C/pexels-photo-1639557.jpg"
}

const currentMenu = [
{
    id: 1,
    name: "Cheeseburger",
    description: "An extremely popular sandwich consisting of one or more meat patties placed in a bun with American cheese.",
    price: "14.99",
    image: "https://i.ibb.co/hYzy23C/pexels-photo-1639557.jpg"
},
{
    id: 2,
    name: "Salmon Salad",
    description: "This Greek salmon salad is seared salmon fillets with cucumber, tomato, olives, red onion, avocado and feta cheese.",
    price: "18.99",
    image: "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg"
}
]
//New item contains a name
test('new item has a name', () => {
    expect(newItem).toHaveProperty("name")
})

//New item contains a price
test('new item has a price', () => {
    expect(newItem).toHaveProperty("price")
})

//New item contains a description
test('new item has a description', () => {
    expect(newItem).toHaveProperty("description")
})

//New item contains an image
test('new item has an image', () => {
    expect(newItem).toHaveProperty("image")
})

//Unit test for adding an item #1
test('menu includes new item', () => {
    expect(addItem(newItem, currentMenu)).toEqual([
        {
            id: 1,
            name: "Cheeseburger",
            description: "An extremely popular sandwich consisting of one or more meat patties placed in a bun with American cheese.",
            price: "14.99",
            image: "https://i.ibb.co/hYzy23C/pexels-photo-1639557.jpg"
        },
        {
            id: 2,
            name: "Salmon Salad",
            description: "This Greek salmon salad is seared salmon fillets with cucumber, tomato, olives, red onion, avocado and feta cheese.",
            price: "18.99",
            image: "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg"
        },
        {
            id: 6,
            name: "Flatbread Pizza",
            description: "Freshed tossed dough topped with local garden vegetables, Italian seasonings, and mozzarella cheese.",
            price: "13.50",
            image: "https://i.ibb.co/ZLkNkyw/flatbread-Pizza.jpg"
        }
        ])
})

//Unit test for adding an item #2
test('menu has correct array length after item is added', () => {
    expect(addItem(newItem, currentMenu)).toHaveLength(3)
})

//Unit test for deleting an item #1
test('menu does not include deleted item', () => {
    expect(deleteItem(removeItem, currentMenu)).toEqual([
        {
            id: 2,
            name: "Salmon Salad",
            description: "This Greek salmon salad is seared salmon fillets with cucumber, tomato, olives, red onion, avocado and feta cheese.",
            price: "18.99",
            image: "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg"
        }
        ])
})

//Unit test for deleting an item #2
test('menu has correct array length after item is deleted', () => {
    expect(deleteItem(removeItem, currentMenu)).toHaveLength(1)
})

//Unit test for editing an item #1
test('menu has correct item data after item is updated', () => {
    expect(updateItem(updatedItem, currentMenu)).toEqual([
        {
            id: 1,
            name: "Double Cheeseburger",
            description: "An extremely popular sandwich consisting of one or more meat patties placed in a bun with American cheese.",
            price: "19.99",
            image: "https://i.ibb.co/hYzy23C/pexels-photo-1639557.jpg"
        },
        {
            id: 2,
            name: "Salmon Salad",
            description: "This Greek salmon salad is seared salmon fillets with cucumber, tomato, olives, red onion, avocado and feta cheese.",
            price: "18.99",
            image: "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg"
        }
        ])
})

//Unit test for editing an item #2
test('first item in the menu contains updated name', () => {
    const updatedMenu = updateItem(updatedItem, currentMenu)
    expect(updatedMenu[0].name).toEqual("Double Cheeseburger")
})

//Unit test for editing an item #3
test('first item in the menu contains updated price', () => {
    const updatedMenu = updateItem(updatedItem, currentMenu)
    expect(updatedMenu[0].price).toEqual("19.99")
})