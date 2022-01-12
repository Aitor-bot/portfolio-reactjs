import React from 'react'
import { DesktopComputerIcon} from "@heroicons/react/solid";

export default class Abilities extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
    return(
        <section id="abilities">
      <div class="container px-5 py-10 mx-auto">
        <div class="text-center mb-10">
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-white">
          <DesktopComputerIcon class="w-10 inline-block mb-4" /> &nbsp;
          {this.props.techTitle}
          </h1>
        </div>
              <p>{this.props.javascript}</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <p>{this.props.react}</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <p>Java</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "45%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <p>{this.props.node}</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <p>{this.props.mongo}</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
           
            <p>Scrum</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            

      </div>
    </section>
    )    
}
}