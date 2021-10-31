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
        <section className="relative pt-12 bg-blueGray-50">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." className="max-w-full rounded-lg " src={Img} />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                <i className="text-xl">{rocketIcon}</i>
              </div>
              <h3 className="text-3xl font-semibold">The Best Travel Agency Company.</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year..
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="">{fingerprintIcon}</i></span>
                    </div>
                    <div>
                      <h4 className="text-gray-500">
                      100% trusted travel agency
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="">{global}</i></span>
                    </div>
                    <div>
                      <h4 className="text-gray-500">2000+ Our worldwide guide</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className=""> {palne}</i></span>
                    </div>
                    <div>
                      <h4 className="text-gray-500">10+ year of travel experience</h4>
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