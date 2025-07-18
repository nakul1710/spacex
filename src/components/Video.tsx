import React from 'react';

const Video = () => {
  return (
    <div
      className="
        relative w-full
        flex items-center justify-center
        bg-black overflow-hidden
        min-h-[400px] h-[60vh]
        sm:h-[600px] md:h-[700px] lg:h-[900px] xl:h-[1000px]
        mt-[100px] sm:mt-[200px] md:mt-[300px] lg:mt-[400px] xl:mt-[500px]
      "
    >
      {/* Video background */}
      <video
        aria-hidden="true"
        data-content-video="true"
        poster="https://sxcontent9668.azureedge.us/cms-assets/assets/20250815_Axiom_4_Splashdown_Stills_09316_DESKTOP_433d1c431b.jpg"
        muted
        playsInline
        loop
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          type="video/mp4"
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/AX_4_Recovery_Crew_Wave_20260715_1536_compress_1ff6105a58.mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

      {/* Text content */}
      <div
        className="
          absolute z-20 flex flex-col items-start
          left-1/2 bottom-10
          -translate-x-1/2
          w-[90%] max-w-[520px]
          sm:left-[40px] sm:bottom-[60px] sm:-translate-x-0
          md:left-[80px] md:bottom-[80px]
          lg:left-[150px] lg:bottom-[100px]
        "
      >
        <p
          className="
            animate uppercase
            text-white
            font-['D-DIN-Medium','Arial','Verdana','sans-serif']
            text-[18px] leading-[28px]
            sm:text-[20px] sm:leading-[38px]
            mt-2 mb-1
          "
        >
          COMPLETED MISSION
        </p>
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
          AX-4 RETURNS TO EARTH
        </h2>
        <a
          className="
            btn animate relative min-w-[110px] sm:min-w-[130px] px-4 sm:px-[15px] mt-6 border-2 border-white inline-block overflow-hidden
            text-white no-underline transition-colors duration-1000 ease-[cubic-bezier(.25,1,.25,1)]
            group
          "
          tabIndex={0}
          href="/launches/mission/?missionId=ax-4"
          aria-label="REWATCH AX-4 RETURNS TO EARTH"
          role="button"
        >
          <div className="hover"></div>
          <span className="text">REWATCH</span>
        </a>
      </div>

      {/* SVG Arrow */}
      <div className="absolute left-1/2 bottom-5 w-[30px] h-[20px] -ml-[15px] z-20">
        <svg width="30" height="20" aria-label="more content below">
          <path
            stroke="#ffffff"
            strokeWidth="2"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
            fill="none"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Video;