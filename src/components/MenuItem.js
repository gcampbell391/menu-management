import React, {useState} from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeleteConfirmation from "./DeleteConfirmation";
import EditItemForm from "./EditItemForm";

const MenuItem = (props) => {

    const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false)
    const [openEditItemForm, setOpenEditItemForm] = useState(false)

    //Close the delete confirmation dialog
    const closeDeleteConfirmation = () => {
        setOpenDeleteConfirmation(false)
    }

    //Close edit item form dialog
    const closeEditItemForm = () => {
        setOpenEditItemForm(false)
    }

    //Close the edit form dialog and handle updating an item
    const handleEditItemClick = (updatedItem) => {
        setOpenEditItemForm(false)
        props.handleEditItem(updatedItem)

    }

    //Close the delete confirmation dialog and handle deleting the item
    const handleDeleteItemClick = () => {
        setOpenDeleteConfirmation(false)
        props.handleDeleteItem(props.menuItem)
    }

    return(
        <div data-testid="menu-item-card">
        <Card id="menu-item-card" sx={{ width: 345, margin: 5, height:450}}>
            <CardMedia
                component="img"
                height="240"
                image={props.menuItem && props.menuItem.image ? props.menuItem.image : "N/A"}
                alt={props.menuItem && props.menuItem.name ? props.menuItem.name : "N/A"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                    {props.menuItem && props.menuItem.name ? props.menuItem.name : "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${props.menuItem && props.menuItem.price ? props.menuItem.price : "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.menuItem && props.menuItem.description ? props.menuItem.description : "N/A"}
                </Typography>
            </CardContent>
            <div id="menu-item-card-buttons">
            <CardActions>
                <Button size="small" startIcon={<EditIcon />} onClick={() => setOpenEditItemForm(true)}>Edit</Button>
                <Button  size="small" startIcon={<DeleteIcon />} onClick={() => setOpenDeleteConfirmation(true)}>Delete</Button>
            </CardActions>
            </div>
        </Card>
        <DeleteConfirmation openDeleteConfirmation={openDeleteConfirmation} closeDeleteConfirmation={closeDeleteConfirmation} handleDeleteItemClick={handleDeleteItemClick}/>
        <EditItemForm menuItem={props.menuItem} openEditItemForm={openEditItemForm} closeEditItemForm={closeEditItemForm} handleEditItemClick={handleEditItemClick}/>
        </div>
    )
}

export default MenuItem