import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <div className="section block h-full m-0 p-0">
        <span
          className="block absolute w-full h-full m-0 p-0 bg-black bg-center bg-no-repeat bg-cover"
          role="img"
          aria-hidden="true"
          style={{
            backgroundImage:
              'url("https://sxcontent9668.azureedge.us/cms-assets/assets/home_mars2026_d_59b1a6ea7a.jpg")',
          }}
        ></span>
        <div
          className="section-inner feature block relative w-full h-full max-w-[1400px] mx-auto"
          style={{ height: 477 }}
        >
          <div
            className="text-left w-1/2 max-w-[520px] absolute left-0"
            style={{ bottom: 150, position: 'absolute' }}
          >
            <h2
              className="animate shadowed relative text-white mx-auto"
              style={{
                textTransform: 'uppercase',
                font: '48px / 48px D-DIN-Bold, Arial, Verdana, sans-serif',
              }}
            >
              THE ROAD TO MAKING LIFE MULTIPLANETARY
            </h2>
            <a
              className="btn animate relative min-w-[130px] px-[15px] mt-[30px] border-2 border-white inline-block overflow-hidden"
              tabIndex={0}
              href="/humanspaceflight/mars/"
              aria-label="Learn More THE ROAD TO MAKING LIFE MULTIPLANETARY "
              role="button"
              style={{ position: 'relative' }}
            >
              <span
                className="hover"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#fff',
                  transition:
                    'transform .6s cubic-bezier(.19,1,.22,1), -webkit-transform .6s cubic-bezier(.19,1,.22,1)',
                  zIndex: 1,
                  opacity: 0,
                  pointerEvents: 'none',
                }}
              ></span>
              <span
                className="relative uppercase w-full text-white transition-colors duration-[500ms] ease-[cubic-bezier(.19,1,.22,1)] group-hover:text-black"
                style={{
                  font: '14px / 50px D-DIN-Bold, Arial, Verdana, sans-serif',
                  WebkitTransition: 'color .5s cubic-bezier(.19,1,.22,1)',
                  zIndex: 2,
                  position: 'relative',
                }}
              >
                Learn More
              </span>
            </a>
          </div>
          <div className="scrollme absolute left-1/2 bottom-5 w-[30px] h-[20px] -ml-[15px]">
            <svg width="30" height="20" aria-label="more content below">
              <path
                d="M2.000,5.000 L15.000,18.000 L28.000,5.000"
                className="fill-none stroke-white"
                strokeWidth={2}
                fill="none"
                stroke="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;