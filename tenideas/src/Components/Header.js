import React, { Fragment } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Tab } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
//import { MemoryRouter as Router } from 'react-router';
import { makeStyles } from '@material-ui/styles';
import IdeaGenerator from './IdeaGenerator'
import Blog from './Blog';
import Contact from './Contact';
import Navbar from './Navbar';
import '../App.css'


const styles = makeStyles(theme => ({
    root: {
        flex: 1,
        // display: 'flex',
        // justifyContent: 'space-even',
        // marginLeft: "10%",
        color: "#ec407a",
        background: 'transparent',
    },
    '@global': {
        li: {
            paddingLeft: 80,
            paddingRight: 75,
            listStyleType: 'none',
            fontSize: 20,
        },
        // a: {
        //     textDecoration: 'none'
        // },

    },
    title: {
        display: 'flex',

    },
    tabStyle: {
        display: 'flex',
        justifyContent: 'space-even',
        marginLeft: "100%",
        marginRight: 550,
        marginTop: -50
    },
    appBarStyle: {
        flext: 1,
        height: 100,
        color: '#e8eaf6',
        background: 'transparent',
        zIndex: 100
    },
    navtabs: {
        marginTop: 30

    },
    logo: {
        color: "#ec407a",
        marginLeft: 20
    },
    navlink: {

    }
}))


function Header(props) {
    const classes = styles()
    const { domains, themes } = props
    return (
        <div>
            <Router>
                <div className={classes.root}>
                    {/* <AppBar className={classes.appBarStyle} position="static"> */}
                    <Toolbar position="static">
                        <div className={classes.navtabs}>
                            <h1 className={classes.logo}>OpenTen</h1>
                            <ul className={classes.tabStyle}>
                                <li><NavLink activeStyle={{ color: '#f50057' }} to='/home'>Home</NavLink></li>
                                <li><NavLink activeStyle={{ color: '#f50057' }} to='/blogs'>Blogs</NavLink></li>
                                <li><NavLink activeStyle={{ color: '#f50057' }} to='/contact'>Contact</NavLink></li>
                            </ul>
                        </div>

                    </Toolbar>
                    {/* </AppBar> */}
                    <Route exact path='/' component={() => <div> <h1>Home Page</h1></div>} />
                    <Route exact path='/home' component={() => (<IdeaGenerator domains={domains} themes={themes} />)} />
                    <Route path='/blogs' component={Blog} />
                    <Route path='/contact' component={Contact} />
                </div>
            </Router >
        </div >
    )
}


export default Header