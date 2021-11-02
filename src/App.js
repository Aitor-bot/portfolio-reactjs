import React from 'react';
import Avatar from './components/Avatar'
import data from './data.js'
import Menu from './components/Menu';
import Description from './components/Description';
import { AiFillGitlab } from 'react-icons/fa';
import Experience from './components/Experience';
import Studies from './components/Studies';


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
      avatar : data.avatar,
      gitlabLink : data.gitlabLink,

      experienceTitle : data.experienceTitle,
      jobName : data.jobName,
      company : data.company,
      doneWork : data.doneWork,
      jobAvatar : data.jobAvatar,

      studies : data.studies,
      AEGTitle : data.AEGTitle,
      nameAEG : data.nameAEG,
      dateAEG : data.dateAEG,
      imageAEG : data.imageAEG,

      titleSEIM : data.titleSEIM,
      nameSEIM : data.nameSEIM,
      dateSEIM : data.dateSEIM,
      imageSEIM : data.imageSEIM,
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
    gitlabLink = {this.state.gitlabLink}
    />
    <Experience
    experienceTitle = {this.state.experienceTitle}
    jobName = {this.state.jobName}
    company = {this.state.company}
    doneWork = {this.state.doneWork}
    jobAvatar = {this.state.jobAvatar}/>

    <Studies
    studies = {this.state.studies}
    AEGTitle = {this.state.AEGTitle}
    nameAEG = {this.state.nameAEG}
    dateAEG = {this.state.dateAEG}
    imageAEG = {this.state.imageAEG}

    titleSEIM = {this.state.titleSEIM}
    nameSEIM = {this.state.nameSEIM}
    dateSEIM = {this.state.dateSEIM}
    imageSEIM = {this.state.imageSEIM}
    
    
    />

    </main>

    
  );
}
}

export default App;