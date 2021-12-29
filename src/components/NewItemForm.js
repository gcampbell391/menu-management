import React, { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewItemForm = (props) => {
    const [open, setOpen] = useState(false);
    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [imageURL, setImageURL] = useState("")


    //Handles opening the Dialog Form
    const handleClickOpen = () => {
        setOpen(true);
    };

    //Handles closing the Dialog Form
    const handleClose = () => {
        setItemName("");
        setPrice("");
        setDescription("");
        setImageURL("");
        setOpen(false);
    };

    //Handles adding an item in the Dialog Form
    const handleAddItemClick = () => {

        if(itemName === ""){
            return toast.dark("Please Enter An Item Name.", {
                pauseOnHover: true
            });
        }
        else if(price === ""){
            return toast.dark("Please Enter A Price.", {
                pauseOnHover: true
            });
        }
        else if(description === ""){
            return toast.dark("Please Enter A Description.", {
                pauseOnHover: true
            });
        }
        else if(imageURL === ""){
            return toast.dark("Please Enter An Image URL.", {
                pauseOnHover: true
            });
        }
        else{
            const newItem = {
                id: props.currentIndex + 1,
                name: itemName, 
                description: description,
                price: price,
                image: imageURL
            }
            props.handleAddItem(newItem)
            setItemName("");
            setPrice("");
            setDescription("");
            setImageURL("");
            setOpen(false)
        } 
    }

    return (
        <div>
        <Button variant="outlined" color="success" startIcon={<AddIcon />} onClick={handleClickOpen}>
            Add New Item
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Item</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please fill out all the fields below to add a new item to your menu.
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
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddItemClick}>Add Item</Button>
            </DialogActions>
        </Dialog>
        <ToastContainer />
        </div>
    );
}

export default NewItemForm

