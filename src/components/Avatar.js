import React from 'react'

export default class Avatar extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
    return(
        <div style={{ 
            width: this.props.width,
            height: this.props.height,
        }}>

            <img src={this.props.src}></img>
           
          
        </div>
    )

    }
}