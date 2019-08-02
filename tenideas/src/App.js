import React, { Component } from 'react'
import Header from './Components/Header';
import { domains, themes } from './Ideas'
import IdeaGenerator from './Components/IdeaGenerator';



class App extends Component {

  state = {
    themes,
    category: '',
    idea: "",
    theme: []
  }

  getThemesByDomains() {

    const initDomains = domains.reduce((acc, category) => ({
      ...acc,
      [category]: []
    }), {})

    return Object.entries(this.state.themes.reduce((acc, theme) => {
      const { title } = theme
      //console.log("acc[title]", acc[title])
      acc[title] = acc[title] ? [...acc[title], theme] : [theme]
      return acc
    }, initDomains))
  }


  handleGenerate = (id) => {
    console.log("selected Id is:", id)
    // get respective id's array of ideas


    //Generate Random idea.

    //set to State

  }

  render() {
    const themes = this.getThemesByDomains()
    console.log("themes:", themes)
    return (
      <div>
        <Header
          domains={domains}
          themes={themes} />    
      </div>
    )
  }
}

export default App
