import React, { Component } from 'react'
import { Grid, Typography, makeStyles, Button } from '@material-ui/core'
import Image from '../assets/contact4.svg'
import Form from './Form';


const useStyles = makeStyles(theme => ({
    image: {
        maxWidth: "70%",
        height: "auto",
        marginTop: 250,
        marginLeft: 150,
    },
    formStyle: {
        marginLeft: 350,
        marginTop: 200,
    },
    buttonStyle: {
        marginLeft: 600,
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30,

    },
}))

function Contact() {
    const classes = useStyles()

    function handleClick() {
        // save data and mail to my mail id.
        console.log("button clicked")
    }
    return (
        <div>
            <Grid container spacing={40}>
                <Grid item xs={6}>
                    <div className={classes.formStyle}>
                        <Typography variant="h2" color="primary" >
                            Drop us a Line
                        </Typography>
                        <Form />
                    </div>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className={classes.buttonStyle}
                        onClick={handleClick}
                    >
                        Submit
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <img className={classes.image} src={Image} alt="" />
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact