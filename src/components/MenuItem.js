import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MenuItem = (props) => {

    console.log(props.menuItem)
    return(
        <Card sx={{ maxWidth: 345, margin: 5}}>
            <CardMedia
                component="img"
                height="240"
                image={props.menuItem && props.menuItem.image ? props.menuItem.image : "N/A"}
                alt={props.menuItem && props.menuItem.name ? props.menuItem.name : "N/A"}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.menuItem && props.menuItem.name ? props.menuItem.name : "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${props.menuItem && props.menuItem.price ? props.menuItem.price : "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.menuItem && props.menuItem.description ? props.menuItem.description : "N/A"}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    )
}

export default MenuItem