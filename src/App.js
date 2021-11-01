import React from 'react';
import Avatar from './components/Avatar'
import data from './data.js'
import Menu from './components/Menu';

class App extends React.Component {
  constructor()
  {
    super()
    this.state = {
      
      avatarWidth: "300px",
      avatarHeight: "600px",
      avatarSrc: data.avatar,
      fullNameMenu: data.fullName,
      experienceMenu: data.experienceM,
      projectsMenu : data.projectsM,
      abilitiesMenu : data.abilitiesM,
      studiesMenu : data.studiesM
    } 
  }

  render(){
  return (
    <div className="App">
    <Menu 
    fullName = {this.state.fullNameMenu}
    experienceM = {this.state.experienceMenu}
    projectsM = {this.state.projectsMenu}
    abilitiesM = {this.state.abilitiesMenu}
    studiesM = {this.state.studiesMenu}
    />
    <Avatar
    width={this.state.avatarWidth}
    height={this.state.avatarHeight}
    src={this.state.avatarSrc}
    />
    
    </div>

    
  );
}
}

export default App;