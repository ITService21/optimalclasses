import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselWithIndicators() {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel" interval={3000}>
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem
            itemID={1}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
           src="/images/journeyInside1.jpg"
              className="block w-full"
              alt="landingPage1"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/images/slide01.jpg"
              className="block w-full"
              alt="landingPage2"
            />
          </TECarouselItem>

          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
               src="/images/slide03.jpg"
              className="block w-full"
              alt="landingPage3"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/images/slide04.jpg"
              className="block w-full"
              alt="landingPage4"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="/images/slide005.jpg"
              className="block w-full"
              alt="landingPage5"
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}