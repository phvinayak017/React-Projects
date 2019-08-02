import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';


const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: "60%",
        color: "#ec407a",

    }
}))

function Navbar(props) {
    const classes = styles()
    return (
        <List className={classes.root} component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="primary" variant="title">
                        Home
               </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="primary" variant="title">
                        Posts
               </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="primary" variant="title">
                        Contact
               </TypoGraphy>
                </ListItemText>
            </ListItem >
        </List>
    )
}


export default Navbar