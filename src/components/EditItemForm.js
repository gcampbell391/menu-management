import React, { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditItemForm = (props) => {
    const [itemName, setItemName] = useState(props.menuItem.name)
    const [price, setPrice] = useState(props.menuItem.price)
    const [description, setDescription] = useState(props.menuItem.description)
    const [imageURL, setImageURL] = useState(props.menuItem.image)

    //Handles updating an item and passing it back
    const handleUpdateItemClick = () => {
        //Present notification if the item name is missing
        if(itemName === ""){
            return toast.dark("Please Enter An Item Name.");
        }
        //Present notification if the item price is missing
        else if(price === ""){
            return toast.dark("Please Enter A Price.");
        }
        //Present notification if the item description is missing
        else if(description === ""){
            return toast.dark("Please Enter A Description.");
        }
        //Present notification if the item image URL is missing
        else if(imageURL === ""){
            return toast.dark("Please Enter An Image URL.");
        }
        else{
            const updatedItem = {
                id: props.menuItem.id,
                name: itemName, 
                description: description,
                price: price,
                image: imageURL
            }
            props.handleEditItemClick(updatedItem)
        } 
    }

    return (
        <div>
        <Dialog open={props.openEditItemForm} onClose={props.closeEditItemForm}>
            <DialogTitle>Update {props.menuItem.name}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please ensure all fields are completed.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Item Name"
                fullWidth
                variant="standard"
                required
                value={itemName}
                onChange={event => setItemName(event.target.value)}
                inputProps={{ maxLength: 40 }}
            />
            <TextField
                autoFocus
                margin="dense"
                id="price"
                label="Price"
                fullWidth
                variant="standard"
                required
                value={price}
                onChange={event => setPrice(event.target.value)}
                inputProps={{ maxLength: 5 }}
            />
            <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                fullWidth
                variant="standard"
                required
                value={description}
                onChange={event => setDescription(event.target.value)}
                inputProps={{ maxLength: 125 }}
            />
            <TextField
                autoFocus
                margin="dense"
                id="imageURL"
                label="Image URL"
                fullWidth
                variant="standard"
                required
                value={imageURL}
                onChange={event => setImageURL(event.target.value)}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={props.closeEditItemForm}>Cancel</Button>
            <Button onClick={handleUpdateItemClick}>Update</Button>
            </DialogActions>
        </Dialog>
        <ToastContainer />
        </div>
    );
}

export default EditItemForm

