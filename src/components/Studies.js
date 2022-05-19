import React from 'react'
import { BookOpenIcon } from "@heroicons/react/solid";
import logo from "../components/seim.jpeg"

export default class Studies extends React.Component {
  render() {
    return (
      <section id="studies">
        <div class="container px-5 py-10 mx-auto text-center">
          <h1 class="sm:text-4xl text-3xl font-medium title-font text-white mb-6">
            <BookOpenIcon class="w-8 inline-block mb-3" />
            &nbsp; {this.props.studies}
          </h1>
          <div class="flex flex-wrap m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-white">
                    {this.props.AEGTitle}
                  </span>
                  <span class="text-gray-500">
                    {this.props.nameAEG}
                  </span>
                </span>
                <p class="leading-relaxed mb-3 text-gray-500">{this.props.dateAEG}</p>
                <div class="inline-flex items-center">
                  <img
                    src={this.props.imageAEG}
                    alt="aegimg"
                    class="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <span class="flex-grow flex flex-col pl-4">
                  <span class="title-font font-medium text-white">
                    {this.props.titleSEIM}
                  </span>
                  <span class="text-gray-500">
                    {this.props.nameSEIM}
                  </span>
                </span>
                <p class="leading-relaxed mb-3 text-gray-500">{this.props.dateSEIM}</p>
                <div class="inline-flex items-center">
                  <img
                    src={logo}
                    alt="seimimg"
                    class="w-12 rounded-full flex-shrink-0 object-cover object-center"
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