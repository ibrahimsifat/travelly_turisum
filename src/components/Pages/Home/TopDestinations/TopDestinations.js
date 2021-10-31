import React from 'react';
import '../../../../App.css'
const TopDestinations = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
    <article>
        <h2 className="text-2xl font-extrabold text-blue-800">Destinations</h2>
        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <article className="bg-3 relative mx-auto w-72 h-96 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                
             >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative mx-auto w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <h3 className="text-center">
                        <a className="text-white text-2xl font-bold text-center" href="#sdfg">
                            <span className="absolute inset-0"></span>
                           PORTUGAL
                        </a>
                    </h3>
                </div>
            </article>
            <article className="bg-2 relative mx-auto w-72 h-96 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                
                
                >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative mx-auto w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <h3 className="text-center">
                        <a className="text-white text-2xl font-bold text-center" href="# dfg">
                            <span className="absolute inset-0"></span>
                           FLORIDA
                        </a>
                    </h3>
                </div>
            </article>
            <article className="bg-1 relative mx-auto w-72 h-96 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                
                
                >
                <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <h3 className="text-center">
                        <a className="text-white text-2xl font-bold text-center" href="# dfg">
                            <span className="absolute inset-0"></span>
                            SINGAPORE
                        </a>
                    </h3>
                </div>
            </article>
        </section>
    </article>
</section>
        </div>
    );
};
// const Article=(props)=>{
// const {sty}=props
//     return(
//         <article className="bg-1 relative w-72 h-96 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              
              
              
//               >
//                 <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
//                 <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
//                     <h3 className="text-center">
//                         <a className="text-white text-2xl font-bold text-center" href="#sdf">
//                             <span className="absolute inset-0"></span>
//                             The best plugins for Visual Studio Code
//                         </a>
//                     </h3>
//                 </div>
//             </article>
//     )
// }

export default TopDestinations;