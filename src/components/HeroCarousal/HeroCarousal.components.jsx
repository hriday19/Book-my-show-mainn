import React from "react";
import HeroSlider from "react-slick";

//Component
import {NextArrow,PrevArrow} from "./Arrow.components"



const HeroCarousal = () => {

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        NextArrow:<NextArrow/>,
        PrevArrow:<PrevArrow/>
      };
    
      const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        NextArrow:<NextArrow/>,
        PrevArrow:<PrevArrow/>

      };
      const images= ["https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                     "https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                      "https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
                      "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
                      "https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80"
    
    
    
    ];
      return (
        <>
          <div className="lg:hidden">
            <HeroSlider {...settings}>
              {images.map((image) => (
                <div className="w-full h-56 md:h-80 py-3 ">
                  <img
                    src={image}
                    alt="testing"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </HeroSlider>
          </div>
    
          <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
              {images.map((image) => (
                <div className="w-full h-96 px-2 py-3">
                  <img
                    src={image}
                    alt="testing"
                    className="w-full h-full rounded-md"
                  />
                </div>
              ))}
            </HeroSlider>
          </div>
        </>
      );
    };

    export default HeroCarousal;