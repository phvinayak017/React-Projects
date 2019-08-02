import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@material-ui/core'
import { Card, CardContent, CardActions, Button } from '@material-ui/core'

const styles = {
    domainStyle: {
        color: '#d3fcd3',
        marginTop: '8%',
        marginLeft: '20%',
        width: 200,
    },
    paperStyle: {
        color: '#d3fcd3',
        marginTop: '2%',
        marginLeft: '20%',
        width: "60%",
        height: "35%"
    },
    cardContent: {
        marginTop: 140,
        marginLeft: 100,
        marginBottom: 120,
        marginRight: 100,
    },
    buttonStyle: {
        marginTop: '1.5%',
        marginLeft: '47%',
        marginBottom: 100,
        marginRight: 100,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 30,
        paddingRight: 30
    },
    writeButton: {
        marginBottom: 30,
        marginLeft: '85%',
    }

}

class IdeaGenerator extends Component {
    defaultProps
    state = {
        domains: "",
        id: "",
        idea: 'Welcome to TenIdeas, select domain to get themes !! '
    }

    handleChange = (name) => (event) => {
        const { value } = event.target
        const index = this.props.domains.indexOf(value)
        console.log("id:", index)
        console.log("value:", value)
        this.setState({
            [name]: value,
            id: index,
            idea: 'Click `GENERATE` button to  generate theme!!'
        })

    }

    handleWriteClick = () => {
        //Open form and add list of ideas and save it user repository or in some json file
        console.log("Create Form to enter ideas and save it to user account")
    }

    handleClick = (name) => (event) => {
        // console.log("selected name is:", this.state.index)
        // this.props.onGenerate(this.state.index)

        // get respective id's array of ideas
        const themeById = this.props.themes.reduce((acc, theme, index) => {
            if (index === this.state.id) {
                // console.log("push resp theme in acc", theme)
                acc = theme
            }
            return acc
        }, {}).reduce((acc, obj, index) => {
            if (index === 1) {
                acc = obj
            }
            return acc
        }, {}).reduce((acc, idea, index) => {
            acc[index] = idea.ideas
            // console.log("ideas", acc)
            return acc
        }, {})
        // console.log("themebyid:", themeById)

        //Generate Random idea.
        let randomNo = Math.floor(Math.random() * (Object.keys(themeById).length))
        this.setState({
            idea: themeById[randomNo]
        })
        console.log(randomNo)

        //set to State
    }


    render() {
        const { domains, idea, id } = this.state
        const isEnable = id === ''
        console.log(isEnable)
        // console.log("domains:", this.props.domains)
        return (
            <Fragment >
                <form>
                    <FormControl style={styles.domainStyle} variant="outlined" >
                        <InputLabel htmlFor="outlined-choose-domain" align='left'> Choose Domains </InputLabel>
                        <Select
                            value={domains}
                            onChange={this.handleChange("domains")}
                        >
                            {this.props.domains.map((category) => {
                                return <MenuItem key={category} value={category}>{category}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </form>
                <Card style={styles.paperStyle} >
                    <CardContent style={styles.cardContent} align='center' >
                        <Typography variant="h5" component="h2" color="primary" gutterBottom>
                            {idea}
                        </Typography>
                    </CardContent>
                    <cardContent>
                        <Button
                            variant="contained"
                            // color="secondary"
                            color="primary"
                            size="medium"
                            // disabled
                            style={styles.writeButton}
                            onClick={this.handleWriteClick}>
                            Write Ideas
                        </Button>
                    </cardContent>
                </Card>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    disabled={isEnable}
                    style={styles.buttonStyle}
                    onClick={this.handleClick("id")}>
                    Generate
                </Button>
            </Fragment>
        )
    }
}
export default IdeaGenerator
