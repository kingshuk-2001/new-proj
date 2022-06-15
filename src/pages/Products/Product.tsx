import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './products.css'


const Product = () => {
    return (
        <div className='product'>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea className='card-cont'>
                <CardMedia
                    className='card-img'
                    component="img"
                    height="140"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRab9jYyUD3-xkM1QG_oPBDTQ_GTgcqKb6_ow&usqp=CAU"
                    alt="green iguana"
                />
                <CardContent className='card'>
                    <Typography gutterBottom variant="h5" component="div">
                        Phone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum consequatur adipisci, maxime debitis iusto itaque autem porro voluptatem! Magni ducimus eligendi aspernatur maiores! Blanditiis, doloremque cum. Eligendi, alias nemo!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary">
                    Share
                </Button>
            </CardActions>
        </Card></div>
    )
}

export default Product

