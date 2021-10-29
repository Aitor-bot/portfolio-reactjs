import React from 'react';
import Avatar from './components/Avatar'
import data from './data.js'

class App extends React.Component {
  constructor()
  {
    super()
    this.state = {
      
      avatarWidth: "300px",
      avatarHeight: "600px",
      avatarSrc: data.avatar


    } 
  }

  render(){
  return (
    <div className="App">
      
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