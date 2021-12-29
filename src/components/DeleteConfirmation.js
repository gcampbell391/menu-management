import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteConfirmation = (props) => {

    return (
        <div>
            <Dialog
                open={props.openDeleteConfirmation}
                onClose={props.closeDeleteConfirmation}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
                {"Delete Confirmation"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Are you sure you would like to delete this item from the menu?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeDeleteConfirmation}>Cancel</Button>
                <Button onClick={props.handleDeleteItemClick} autoFocus>Delete</Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeleteConfirmation