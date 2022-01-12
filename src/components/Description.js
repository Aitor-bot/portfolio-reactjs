import React from 'react'

export default class Description extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
    return(
      <section id="description">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          {this.props.titleDescription}<br/>
            <p className="hidden lg:inline-block" />{this.props.subDescription}
          </h1>
          <p className="mb-1 leading-relaxed">
          </p>
          <p className="mb-4 leading-relaxed">
          {this.props.contact}
          </p>
          <div className="flex justify-center">
            <a
              href={this.props.gitlabLink} target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              {this.props.lookGitlab}
            </a>
            <a
              href={this.props.cvLink} download
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              {this.props.downloadCV}
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

        </div>
      </div>
    </section>
    )

    }
}