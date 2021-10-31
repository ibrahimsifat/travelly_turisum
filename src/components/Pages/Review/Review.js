import React, { useRef, useState } from 'react';
import '../../../App.css'



const Img1='https://i.ibb.co/w6963qN/slider-10-1.jpg'
const Img2='https://i.ibb.co/dG7sy6R/slider-10-2.jpg'

const colors = [Img1,Img2];
const delay = 2500;

const Review = () => {
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
        <div className="slideshow py-16">
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
  


</div>
      </div>
    );
};


export default Review;


