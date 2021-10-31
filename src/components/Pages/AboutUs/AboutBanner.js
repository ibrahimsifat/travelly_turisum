import { faFingerprint, faGlobeEurope, faPaperPlane, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Img from '../../../img/why-u.png'
const fingerprintIcon= <FontAwesomeIcon icon={faFingerprint}/>
const rocketIcon= <FontAwesomeIcon icon={faRocket}/>
const global= <FontAwesomeIcon icon={faGlobeEurope}/>
const palne= <FontAwesomeIcon icon={faPaperPlane}/>
const AboutBanner = () => {
    return (
        <section class="relative pt-12 bg-blueGray-50">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." class="max-w-full rounded-lg " src={Img} />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                <i class="text-xl">{rocketIcon}</i>
              </div>
              <h3 class="text-3xl font-semibold">The Best Travel Agency Company.</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-500">
              Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year..
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="">{fingerprintIcon}</i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-500">
                      100% trusted travel agency
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="">{global}</i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-500">2000+ Our worldwide guide</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class=""> {palne}</i></span>
                    </div>
                    <div>
                      <h4 class="text-gray-500">10+ year of travel experience</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
       
        </section>
    );
};

export default AboutBanner;