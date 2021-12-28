import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MenuItem = () => {

    return(
        <Card sx={{ maxWidth: 345, margin: 5 }}>
            <CardMedia
                component="img"
                height="140"
                image="menu-item.jpg"
                alt="menu item"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Hamburger
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    $14.99
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    An extremely popular sandwich consisting of one or more meat patties placed in a bun or a bread roll
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    )
}

export default MenuItem