import React from 'react';
import Avatar from './components/Avatar'
import data from './data.js'
import Menu from './components/Menu';
import Description from './components/Description';
import { AiFillGitlab } from 'react-icons/fa';


class App extends React.Component {
  constructor()
  {
    super()
    this.state = {
      
      avatarSrc: data.avatar,
      fullNameMenu: data.fullName,
      experienceMenu: data.experienceM,
      projectsMenu : data.projectsM,
      abilitiesMenu : data.abilitiesM,
      studiesMenu : data.studiesM,

      titleDescription: data.titleDescription,
      subDescription: data.subDescription, 
      description: data.description,
      lookGitlab: data.lookGitlab,
      cvLink : data.cvLink,
      downloadCV : data.downloadCV,
      avatar : data.avatar

    } 
  }

  render(){
  return (
    <main className="text-gray-400 bg-gray-900 body-font"> 
    <Menu 
    fullName = {this.state.fullNameMenu}
    experienceM = {this.state.experienceMenu}
    projectsM = {this.state.projectsMenu}
    abilitiesM = {this.state.abilitiesMenu}
    studiesM = {this.state.studiesMenu}
    />
    <Description 
    titleDescription = {this.state.titleDescription}
    subDescription = {this.state.subDescription}
    description = {this.state.description}
    lookGitlab = {this.state.lookGitlab}
    cvLink = {this.state.cvLink}
    downloadCV = {this.state.downloadCV}
    avatar = {this.state.avatar}

    />
    
    </main>

    
  );
}
}

export default App;