import React, { useRef, useState } from 'react';
import './Slider.css'



const Img1='https://i.ibb.co/YXrR6yC/New-Project-4.jpg'
const Img2='https://i.ibb.co/84vxV56/New-Project.jpg'
const Img3='https://i.ibb.co/ZxmNTG4/New-Project-3.jpg'
const Img4='https://i.ibb.co/n3L6mgy/New-Project-2.jpg'
const Img5='https://i.ibb.co/BKjL6T0/New-Project-1.jpg'
const colors = [Img1,Img2,Img3,Img4,Img5];
const delay = 2500;

const Banner = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div>
        <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((source , index) => (
              <img  className="slide"
              key={index}
              src={source} alt="" />
          ))}
        </div>
  



        <div className="slideshowDots text-center">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
      
      
      
      
      
    <div className="grid relative -top-32 z-10">
  
  <Section></Section>

</div>
      </div>
    );
};

const Section=()=>{
  return(
    <div className="p-2 px-10 text-center cursor-pointer">
      <div className="py-7  rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
          <div className="">
              {/* <i className="fa fa-spa" style="font-size:48px;"></i> */}
              
              <div className=" py-4">
                  <div className="space-y-5">
                      <div className="font-bold text-xl mb-2">Spa</div>
                      <p className="text-gray-700 text-base">
                          Todo tipo de masajes y técnicas
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}
export default Banner;


