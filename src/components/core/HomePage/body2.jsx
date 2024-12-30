import React, {useEffect, useRef} from "react";
// import ScrollAnimation from "react-animate-on-scroll";
import useFlipHookAnimaiton from "../../../hooks/animationHook/useFlipHookAnimaiton"
import useLeftToRightSlideAnimation from "../../../hooks/animationHook/useLeftToRightSlideAnimation"

const PerfectPlatform = () => {
  const  animationRef1 = useFlipHookAnimaiton("animate-rotateIn");
  const  animationRef2 = useFlipHookAnimaiton("animate-zoomInRotate");
  const  animationRef3 = useFlipHookAnimaiton("animate-bounceInDown"); //It comes from navbar to down   
  const  animationRef4 = useFlipHookAnimaiton("animate-slideInDiagonal"); //From Right to down left   //Good for Card
  const  animationRef5 = useFlipHookAnimaiton("animate-flipInDiagonal"); //Flip diagonally at own place  //Good for Card
  const  animationRef6 = useFlipHookAnimaiton("animate-scaleInSkew"); // Good for Card
  const  animationRef7 = useFlipHookAnimaiton("animate-rippleIn"); // Better for Card
  const  animationRef8 = useFlipHookAnimaiton("animate-dropIn");  // Like water droplet from top to bottom
  const  animationRef9 = useFlipHookAnimaiton("animate-waveIn"); // From left to right // Good for Card
  const  animationRef10 = useFlipHookAnimaiton("animate-expandHorizontal"); // Like slow rotation in z axis // Goood for card and text
  
  return (
    <section className="py-16  bg-gray-25 ">
      <h2 className="text-4xl font-bold text-center mb-8">
        The perfect platform to boost your
        <span className="bg-gradient-to-b from-[#864135] to-[#F09819] text-transparent bg-clip-text font-bold">
          {" "}
          technical skills{" "}
        </span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* <ScrollAnimation animateIn="flipInX"> */}
          <div ref={animationRef10} className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <img
              className="mx-auto mb-4"
              src="https://blob.sololearn.com/assets/home-perfect-platform-1-rebranding.svg"
              alt="sl-home-perfect-img"
              loading="lazy"
            />
            <div className="text-xl font-semibold mb-2">Students</div>
            <span className="text-gray-600 mb-4 block">
              Prepping for the big test or want to ace your first interview? Use
              Sololearn's real-world practice to reinforce what you've learned
              and get you ready for that big moment.
            </span>
            <a
              type="button"
              className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
              href="/signup"
            >
              Learn for free
            </a>
          </div>
        {/* </ScrollAnimation> */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
          <img
            className="mx-auto mb-4"
            src="https://assets.sololearn.com/home-perfect-platform-2.svg"
            alt="sl-home-perfect-img"
            loading="lazy"
          />
          <div className="text-xl font-semibold mb-2">Professionals</div>
          <span className="text-gray-600 mb-4 block">
            You can learn something totally new to advance your career. Or maybe
            you just want to knock off the rust. Try Sololearn to get access to
            a variety of courses, from machine learning to web development.
          </span>
          <a
            type="button"
            className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
            href="/signup"
          >
            Boost your career
          </a>
        </div>
      </div>

      <div className="text-center mb-8 mt-[90px]">
        <h2 className="font-black text-black text-4xl text-heading uppercase">
          Why{" "}
          <span className="bg-gradient-to-b from-[#864135] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            Code{" "}
          </span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
          <div className="mb-4">
            <img
              className="mx-auto"
              src="https://assets.sololearn.com/home-why-code-1.svg"
              alt="why-code-icon"
              loading="lazy"
            />
          </div>
          <div className="text-xl font-semibold mb-2">It's popular</div>
          <div className="text-gray-600">
            <strong>Technical skills are in high demand.</strong> Over 60% of
            new jobs worldwide will require tech skills.
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
          <div className="mb-4">
            <img
              className="mx-auto"
              src="https://assets.sololearn.com/home-why-code-2.svg"
              alt="why-code-icon"
              loading="lazy"
            />
          </div>
          <div className="text-xl font-semibold mb-2">It's promising</div>
          <div className="text-gray-600">
            Unlock your earning potential! Entry-level programmers in the U.S.
            earn on <strong>average over $78,000 in salary.</strong>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
          <div className="mb-4">
            <img
              className="mx-auto"
              src="https://assets.sololearn.com/home-why-code-3.svg"
              alt="why-code-icon"
              loading="lazy"
            />
          </div>
          <div className="text-xl font-semibold mb-2">It's fun</div>
          <div className="text-gray-600">
            Imagine combining your passion and skill with your creativity, and{" "}
            <strong>making something new everyday!</strong>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 mb-12">
        <a
          type="button"
          className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
          href="/signup"
        >
          I want to code
        </a>
      </div>

      {/* Slanted Line */}
      <div className="relative w-full h-0 border-t-[110px] border-transparent border-r-[160vw] border-r-gray-25 transform rotate-2 -mt-10 -ml-40 -mb-24"></div>
    </section>
  );
};

export default PerfectPlatform;
