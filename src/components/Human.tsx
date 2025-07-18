import React from 'react';

const Human = () => {
  return (
    <div className="
      relative w-full 
      flex items-center justify-center 
      bg-black overflow-hidden
      min-h-[400px] h-[60vh] 
      sm:h-[600px] md:h-[700px] lg:h-[900px] xl:h-[1060px]
      mt-[100px] sm:mt-[200px] md:mt-[300px] lg:mt-[400px] xl:mt-[500px]
    ">
      {/* Background image */}
      <span
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover z-0"
        role="img"
        aria-hidden="true"
        style={{
          backgroundImage:
            'url("https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg")',
        }}
      ></span>
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 z-10"></div>
      {/* Text content */}
      <div
        className="
          absolute z-20 flex flex-col items-start
          left-1/2 bottom-10
          -translate-x-1/2
          w-[90%] max-w-[520px]
          sm:left-[40px] sm:bottom-[60px] sm:-translate-x-0
          md:left-[80px] md:bottom-[80px]
          lg:left-[100px] lg:bottom-[100px]
        "
      >
        <h2
          className="
            animate shadowed uppercase text-white
            font-bold
            font-['D-DIN-Bold','Arial','Verdana','sans-serif']
            text-[28px] leading-[32px]
            sm:text-[36px] sm:leading-[40px]
            md:text-[44px] md:leading-[48px]
            lg:text-[48px] lg:leading-[48px]
            mt-2 mb-4
          "
        >
          ADVANCING HUMAN SPACEFLIGHT
        </h2>
        <a
          className="
            btn animate relative min-w-[110px] sm:min-w-[130px] px-4 sm:px-[15px] mt-6 border-2 border-white inline-block overflow-hidden
            text-white no-underline transition-colors duration-1000 ease-[cubic-bezier(.25,1,.25,1)]
            group
          "
          tabIndex={0}
          href="/updates/#eva-suit"
          aria-label="LEARN MORE ADVANCING HUMAN SPACEFLIGHT"
          role="button"
        >
          <span
            className="
              hover
              absolute top-0 left-0 w-full h-full
              bg-white
              opacity-0
              pointer-events-none
              transition-transform duration-600 ease-[cubic-bezier(.19,1,.22,1)]
              z-10
              group-hover:opacity-10
            "
          ></span>
          <span
            className="
              relative uppercase w-full text-white
              transition-colors duration-500 ease-[cubic-bezier(.19,1,.22,1)]
              group-hover:text-black
              font-['D-DIN-Bold','Arial','Verdana','sans-serif']
              text-[13px] leading-[44px]
              sm:text-[14px] sm:leading-[50px]
              z-20
            "
          >
            LEARN MORE
          </span>
        </a>
      </div>
      {/* SVG Arrow */}
      <div className="absolute left-1/2 bottom-5 w-[30px] h-[20px] -translate-x-1/2 z-20">
        <svg width="30" height="20" aria-label="more content below">
          <path
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
            className="fill-none stroke-white"
            strokeWidth={2}
            fill="none"
            stroke="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Human;