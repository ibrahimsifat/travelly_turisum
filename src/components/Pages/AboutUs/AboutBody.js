import React from 'react';
import teamImg from '../../../img/team1.jpg'
import teamImg2 from '../../../img/team2.jpg'
import teamImg3 from '../../../img/team3.jpg'
import teamImg4 from '../../../img/team4.jpg'
import teamImg5 from '../../../img/team5.jpg'
import teamImg6 from '../../../img/team6.jpg'



const AboutBody = () => {
    return (
        <div className='container mx-auto my-16'>
          <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
        OUR TRAVEL AGENTS
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-4xl font-heading text-gray-900">
        Make your travel Experience still better with us.

        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Expart img={teamImg} name="Liza Manrow"></Expart>
      <Expart img={teamImg2} name='Mary Jean'></Expart>
      <Expart img={teamImg3} name='Laura Stefenie'></Expart>
      <Expart img={teamImg4} name='Phele Caren'></Expart>
      <Expart img={teamImg5} name='Matthew Mc Hart'></Expart>
      <Expart img={teamImg6} name='box-sha'></Expart>
      </div>

    </section>

        </div>
    );
};
const Expart=(props)=>{
   const {img,name}=props
    return(
      <div class="md:w-80 bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center  box-sha">
      <div>
        
          <img class="object-center object-cover h-auto w-full" src={img} alt="" />
      </div>
      <div class="text-center py-8 sm:py-6">
          <p class="text-xl text-gray-700 font-bold mb-2">{name}</p>
          <p class="text-base text-gray-400 font-normal">Travel Agent</p>
      </div>
  </div>
    )
}

export default AboutBody;