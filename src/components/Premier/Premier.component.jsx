import React from 'react'
import Slider from "react-slick"
import Poster from '../Poster/poster.component'

export const Premier = () => 
{const settings = {
    infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const PremierImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA1NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-sgvsgjqubn-portrait.jpg",
      alt: "Shang-Chi",
      title: "Shang-Chi And The Legend Of The Ten Rings",
      subtitle: "Action/Fantasy",
    },
    {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA1NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-sgvsgjqubn-portrait.jpg",
        alt: "Shang-Chi",
        title: "Shang-Chi",
        subtitle: "Action/Fantasy",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA1NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-sgvsgjqubn-portrait.jpg",
        alt: "Shang-Chi",
        title: "Shang-Chi ",
        subtitle: "Action/Fantasy",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA1NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-sgvsgjqubn-portrait.jpg",
        alt: "Shang-Chi",
        title: "Shang-Chi ",
        subtitle: "Action/Fantasy",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA1NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-sgvsgjqubn-portrait.jpg",
        alt: "Shang-Chi",
        title: "Shang-Chi ",
        subtitle: "Action/Fantasy",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA1NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-sgvsgjqubn-portrait.jpg",
        alt: "Shang-Chi",
        title: "Shang-Chi ",
        subtitle: "Action/Fantasy",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA1NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-sgvsgjqubn-portrait.jpg",
        alt: "Shang-Chi",
        title: "Shang-Chi ",
        subtitle: "Action/Fantasy",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTAlICA1NWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-sgvsgjqubn-portrait.jpg",
        alt: "Shang-Chi",
        title: "Shang-Chi ",
        subtitle: "Action/Fantasy",
      },
   
  ];

  return ( <>
        <div className="flex flex-col items-start py-4">
        <h3 className="text-white text-xl font-bold">Premieres</h3>
        <p className="text-white text-sm font-bold ">Brand new releases every Friday</p>
        </div>
      <Slider {...settings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premier;

