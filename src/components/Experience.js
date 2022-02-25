import React from 'react'
import {BriefcaseIcon} from "@heroicons/react/solid";

export default class Experience extends React.Component{

    render() {
    return(
        <section id="experience">
        <div class="container px-10 py-10 mx-auto text-center">
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-6">
          <BriefcaseIcon class="w-8 inline-block mb-3"/> 
          &nbsp;{this.props.experienceTitle} 
          </h1>
          <div class="">
              <div class="">
                <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-white">
                      {this.props.jobName} 
                      </span>
                      <span class="text-white-500 text ">
                      {this.props.company} 
                      </span>
                    </span>
                  <p class="leading-relaxed mb">
                  {this.props.doneWork}</p>
                  <p class="leading-relaxed mb-6">
                  {this.props.companyData}</p>
                  <div class="inline-flex items-center">
                    <img
                      src={this.props.jobAvatar} alt='etxe-tar'
                      class="w-16 rounded-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    )
    }
    }
