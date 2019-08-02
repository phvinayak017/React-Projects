import React, { Component } from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, CardActionArea, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Link, Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import IdeaGenerator from './IdeaGenerator';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    card: {
        display: 'block',
        width: 610,
        height: 500,

    },
    media: {
        height: 250,
    },
    cardaction: {
        marginBotton: -50,
        paddingBottom: 50
    },
    blogText: {
        marginTop: 20,
    }

});




export default function BlogCards(props) {
    const classes = useStyles()
    const { title, link, image, blogText } = props

    function handleClick() {
        console.log("blog clicked", link)
        window.open(link)
    }

    return (
        <Card className={classes.card} >
            <CardActionArea
                onClick={handleClick}
            >
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" color="primary" component="h1">
                        {title}
                    </Typography>
                    <Typography className={classes.blogText} variant="body2" color="textSecondary" component="p">
                        {blogText}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions className={classes.cardaction}>
                <Button
                    size="small"
                    color="primary"
                    onClick={handleClick}>
                    Learn More
                </Button>
            </CardActions> */}
        </Card>
    )
}

