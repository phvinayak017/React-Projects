import React from 'react';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';




const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#fc37aa',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fc37aa',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#fc37aa',
            },
            '&:hover fieldset': {
                borderColor: '#fc37aa',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#fc37aa',
            },
        },
    },
})(TextField);

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #fc37aa',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);




const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(2),
        width: 350,
    },
}));


export default function Form() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <CssTextField
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="First Name" />
            </div>
            <div className={classes.root}>
                <CssTextField
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Last Name" />
            </div>
            <div className={classes.root}>
                <CssTextField
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Email id" />
            </div>
            <div className={classes.root}>
                <CssTextField
                    className={classes.margin}
                    id="custom-css-standard-input"
                    label="Address" />
            </div>
        </div>
    )
}