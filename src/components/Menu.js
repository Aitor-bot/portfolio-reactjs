import React from 'react'

export default class Menu extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
    return(
        <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#description" className="ml-3 text-xl">
            {this.props.fullName}
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 text-white text-opacity-60 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <a href="#experience" className="mr-5 hover:text-white">
            {this.props.experienceM}
            </a>
            <a href="#studies" className="mr-5 hover:text-white">
            {this.props.studiesM}
            </a>
            <a href="#abilities" className="mr-5 hover:text-white">
            {this.props.abilitiesM}
            </a>
            
            
        </nav>
      </div>
    </header>
    )

    }
}