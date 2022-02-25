import React from 'react';
import data from './data.js'
import Menu from './components/Menu';
import Description from './components/Description';
import Experience from './components/Experience';
import Studies from './components/Studies';
import Abilities from './components/Abilities';
import Projects from './components/Projects.js';


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
      contact: data.contact,
      lookGitlab: data.lookGitlab,
      cvLink : data.cvLink,
      downloadCV : data.downloadCV,
      avatar : data.avatar,
      gitlabLink : data.gitlabLink,

      experienceTitle : data.experienceTitle,
      jobName : data.jobName,
      company : data.company,
      companyData : data.companyData,
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

      techTitle : data.techTitle,
      javascript : data.javascript,
      javascriptPercent : data.javascriptPercent,
      react : data.react,
      reactPercent : data.reactPercent,
      node : data.node,
      nodePercent : data.nodePercent,
      mongo : data.mongo,
      mongoPercent : data.mongoPercent,
    } 
    
  }

  render(){
  return (
    <main className="text-gray-400 bg-gray-900"> 
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
    contact = {this.state.contact}
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
    companyData = {this.state.companyData}
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

    <Abilities
    techTitle = {this.state.techTitle}
    javascript = {this.state.javascript}
    javascriptPercent = {this.state.javascriptPercent}
    react = {this.state.react}
    reactPercent = {this.state.reactPercent}
    node = {this.state.node}
    nodePercent = {this.state.nodePercent}
    mongo = {this.state.mongo}
    mongoPercent = {this.state.mongoPercent}

    />

    <Projects></Projects>

    </main>

    
  );
}
}

export default App;