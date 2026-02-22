import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

let imageArray = [
  {
    src: "/images/s1.jpeg",
    className: "block w-full  object-cover",
    alt: "landingPage1"
  },
  {
    src: "/images/LandingPage2.jpeg",
    className: "block w-full object-cover",
    alt: "landingPage2"
  },
  {
    src: "/images/slide_003.JPG",
    className: "block w-full object-cover",
    alt: "landingPage3"
  },
  {
    src: "/images/slide_004.jpg",
    className: "block w-full object-cover",
    alt: "landingPage4"
  },
  {
    src: "/images/slide_005.jpeg",
    className: "block w-full object-cover",
    alt: "landingPage5"
  }
]

export default function CarouselWithIndicators() {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel" interval={3000}>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {imageArray?.map((record, index) => {
            return  <div className=""><TECarouselItem
            itemID={index + 1}
            className=" relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div  >
            <img
              src={record?.src}
              className="block w-full"
              alt={record?.alt}
            />
            </div>
          </TECarouselItem></div>

          })}
        </div>
      </TECarousel>
    </>
  );
}