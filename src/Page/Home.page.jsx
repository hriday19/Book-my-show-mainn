import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import TempPosters from  "../config/TempPosters.config";
import PosterSlider from "../components/PosterSlider/PosterSlider.components"

const HomePage = () => {
    return(
        <>
          <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-12">
            <div className="container mx-auto px-5">
              <h1 className="text-2xl font-bold text-gray-800 my-6">
                The Best Of Entertainment
              </h1>
              <EntertainmentCardSlider />
              
            </div>
            </div>
        <div className="bg-bms-800 py-16">
         
          <div className="container mx-auto px-4 flex flex-col gap-3">
          <div className="flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
                />
          </div>
          <PosterSlider images={TempPosters} 
          title="Premieres" 
          isDark={true}
          subtitle= "Brand New Releases Every Friday"/>
          
          </div>
        </div>
          </div>
          
          <div 
          className="container mx-auto px-4 my-8">
          <PosterSlider
           images={TempPosters} 
          title="Online Streaming Events" 
          isDark={false}
          subtitle= "Brand New Releases Every Friday"/>       
         </div>

         <div 
          className="container mx-auto px-4 my-8">
          <PosterSlider
           images={TempPosters} 
          title="Outdoor Events" 
          isDark={false}
          subtitle= ""/>       
         </div>
         
         <div 
          className="container mx-auto px-4 my-8">
          <PosterSlider
           images={TempPosters} 
          title="Laughter Therapy" 
          isDark={false}
          subtitle= ""/>       
         </div>

         <div 
          className="container mx-auto px-4 my-8">
          <PosterSlider
           images={TempPosters} 
          title="Popular Events" 
          isDark={false}
          subtitle= ""/>       
         </div>
         <div 
          className="container mx-auto px-4 my-8">
          <PosterSlider
           images={TempPosters} 
          title="Top Games & Sport Events" 
          isDark={false}
          subtitle= ""/>       
         </div>
            </>
        
  )
    }
export default HomePage;