import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="section">
        <div className="fixed top-0 left-0 z-[100] w-full h-[100px] bg-black flex items-center text-white">
          <a href="#" id="logo" aria-label="SpaceX Homepage" className="ml-6 left-[100px] grid grid-cols-2">
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 400 50" aria-hidden="true" className="h-12 col-span-2">
              <title>SpaceX Logo</title>
              <g className="letter_s">
                <path className="fill-white" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
                c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
              </g>
              <g className="letter_p">
                <path className="fill-white" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
                c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
              </g>
              <g className="letter_a">
                <polygon className="fill-white" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"></polygon>
              </g>
              <g className="letter_c">
                <path className="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
                c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
              </g>
              <g className="letter_e">
                <polygon className="fill-white" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"></polygon>
                <rect className="fill-white" x="219.9" y="18.6" width="41.9" height="5.4"></rect>
              </g>
              <g className="letter_x">
                <path className="fill-white" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
                <path className="fill-white" d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
              </g>
              <g className="letter_swoosh">
                <path className="fill-white" d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
              </g>
            </svg>
          </a>
          <div className="navigation absolute left-[500px] flex items-center h-full ">
            <ul className="nav-links flex list-none m-0 p-0 ">
              <li className="nav-item mx-[12px]">
                <a
                  href="#"
                  aria-label="Falcon 9 vehicle page"
                  className="uppercase text-sm tracking-wide font-medium hover:text-gray-400 transition-colors duration-200"
                >
                  Falcon 9
                </a>
              </li>
              <li className="nav-item mx-[12px]">
                <a
                  href="#"
                  aria-label="Falcon Heavy vehicle page"
                  className="uppercase text-sm tracking-wide font-medium hover:text-gray-400 transition-colors duration-200"
                >
                  Falcon Heavy
                </a>
              </li>
              <li className="nav-item mx-[12px]">
                <a
                  href="#"
                  aria-label="Dragon spacecraft page"
                  className="uppercase text-sm tracking-wide font-medium hover:text-gray-400 transition-colors duration-200"
                >
                  Dragon
                </a>
              </li>
              <li className="nav-item mx-[12px]">
                <a
                  href="#"
                  aria-label="Starship vehicle page"
                  className="uppercase text-sm tracking-wide font-medium hover:text-gray-400 transition-colors duration-200"
                >
                  Starship
                </a>
              </li>
              <li className="nav-item mx-[12px]">
                <a
                  href="#"
                  aria-label="Human Spaceflight page"
                  className="uppercase text-sm tracking-wide font-medium hover:text-gray-400 transition-colors duration-200"
                >
                  Human Spaceflight
                </a>
              </li>
              <li className="nav-item mx-[12px]">
                <a
                  href="#"
                  aria-label="Rideshare program page"
                  className="uppercase text-sm tracking-wide font-medium hover:text-gray-400 transition-colors duration-200"
                >
                  Rideshare
                </a>
              </li>
              <li className="nav-item mx-[12px]">
                <a
                  href="#"
                  aria-label="Starshield program page"
                  className="uppercase text-sm tracking-wide font-medium hover:text-gray-400 transition-colors duration-200"
                >
                  Starshield
                </a>
              </li>
              <li className="nav-item mx-[12px]">
                <a
                  href="https://www.starlink.com"
                  aria-label="Starlink website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase text-sm tracking-wide font-medium hover:text-gray-400 transition-colors duration-200"
                >
                  Starlink
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="inner-right absolute top-[75px] right-[50px] w-[250px]">
          <ul className="nav-links relative list-none m-0 p-0">
            <li className="nav-item relative inline-block mx-[12px]">
              <a
                href="https://shop.spacex.com/"
                rel="noopener"
                aria-label="SpaceX shop page"
                target="_blank"
                className="uppercase text-sm tracking-wide font-medium hover:text-gray-400 transition-colors duration-200 text-white"
              >
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="menu fixed top-0 right-0 h-full z-[12]">
          <div
            id="menu-background"
            className="block w-full h-[120%] bg-black origin-top-left"
            style={{ WebkitTransformOrigin: 'left top', transformOrigin: 'left top' }}
          ></div>
          <div
            id="menu-navigation"
            style={{ opacity: 0, visibility: 'hidden' }}
          >
            <ul className="nav-links relative list-none m-0 p-0">
              <li className="nav-item primary hidden opacity-0 invisible m-0 text-right" style={{ transform: "translate(0px, 0px)" }}>
                <a href="/vehicles/falcon-9/" aria-label="Falcon 9 vehicle page">Falcon 9</a>
              </li>
              <li className="nav-item primary hidden opacity-0 invisible m-0 text-right" style={{ transform: "translate(0px, 0px)" }}>
                <a href="/vehicles/falcon-heavy/" aria-label="Falcon Heavy vehicle page">Falcon Heavy</a>
              </li>
              <li className="nav-item primary hidden opacity-0 invisible m-0 text-right" style={{ transform: "translate(0px, 0px)" }}>
                <a href="/vehicles/dragon/" aria-label="Dragon spacecraft page">Dragon</a>
              </li>
              <li className="nav-item primary hidden opacity-0 invisible m-0 text-right" style={{ transform: "translate(0px, 0px)" }}>
                <a href="/vehicles/starship/" aria-label="Starship vehicle page">Starship</a>
              </li>
              <li className="nav-item primary hidden opacity-0 invisible m-0 text-right" style={{ transform: "translate(0px, 0px)" }}>
                <a href="/humanspaceflight/" aria-label="Human Spaceflight page">Human Spaceflight</a>
              </li>
              <li className="nav-item primary hidden opacity-0 invisible m-0 text-right" style={{ transform: "translate(0px, 0px)" }}>
                <a href="/rideshare/" aria-label="Rideshare program page">Rideshare</a>
              </li>
              <li className="nav-item primary hidden opacity-0 invisible m-0 text-right" style={{ transform: "translate(0px, 0px)" }}>
                <a href="/starshield/" aria-label="Starshield program page">Starshield</a>
              </li>
              <li className="nav-item primary hidden opacity-0 invisible m-0 text-right" style={{ transform: "translate(0px, 0px)" }}>
                <a href="https://www.starlink.com" aria-label="Starlink website" target="_blank" rel="noopener noreferrer">Starlink</a>
              </li>
              <li className="nav-item secondary" style={{ display: "block", margin: 0, textAlign: "right", opacity: 0, visibility: "hidden", transform: "translate3d(0px, 0.0463px, 0px)" }}>
                <a href="/mission/" aria-label="SpaceX mission page">Mission</a>
              </li>
              <li className="nav-item secondary" style={{ display: "block", margin: 0, textAlign: "right", opacity: 0, visibility: "hidden", transform: "translate3d(0px, 0.0655px, 0px)" }}>
                <a href="/launches/" aria-label="SpaceX launches page">Launches</a>
              </li>
              <li className="nav-item secondary" style={{ display: "block", margin: 0, textAlign: "right", opacity: 0, visibility: "hidden", transform: "translate3d(0px, 0.0926px, 0px)" }}>
                <a href="/careers/" aria-label="SpaceX careers page">Careers</a>
              </li>
              <li className="nav-item secondary" style={{ display: "block", margin: 0, textAlign: "right", opacity: 0, visibility: "hidden", transform: "translate3d(0px, 0.1309px, 0px)" }}>
                <a href="/updates/" aria-label="SpaceX updates page">Updates</a>
              </li>
              <li className="nav-item secondary" style={{ display: "block", margin: 0, textAlign: "right", opacity: 0, visibility: "hidden", transform: "translate3d(0px, 0.1852px, 0px)" }}>
                <a href="https://shop.spacex.com/" rel="noopener" aria-label="SpaceX shop page" target="_blank">Shop</a>
              </li>
            </ul>
          </div>
        </div>
        <button
          aria-expanded="false"
          aria-controls="menu"
          aria-label="Menu"
          role="button"
          aria-haspopup="dialog"
          className="flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer focus:outline-none"
        >
          <div id="bar1" className="w-8 h-1 bg-white my-1 transition-all duration-300 rounded"></div>
          <div id="bar2" className="w-8 h-1 bg-white my-1 transition-all duration-300 rounded"></div>
          <div id="bar3" className="w-8 h-1 bg-white my-1 transition-all duration-300 rounded"></div>
        </button>
      </div>
    </>
  )
}

export default Navbar