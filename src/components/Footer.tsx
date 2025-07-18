import React from 'react'

const Footer = () => {
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="
        w-full
        bg-black
        text-white
        flex
        items-center
        justify-center
        z-50
        relative
        py-6
        px-4
        md:py-8
        md:px-0
        "
    >
      <div className="
        flex flex-col
        items-center
        justify-center
        gap-3
        sm:flex-row
        sm:gap-6
        md:gap-8
        w-full
        max-w-[900px]
        text-center
      ">
        <span className="text-sm md:text-base">SpaceX © 2025</span>
        <a
          href="/media/privacy_policy_spacex.pdf"
          aria-label="SpaceX Privacy Policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base hover:underline"
        >
          PRIVACY POLICY
        </a>
        <a
          href="/supplier/"
          aria-label="Information for SpaceX suppliers"
          className="text-sm md:text-base hover:underline"
        >
          SUPPLIERS
        </a>
      </div>
    </footer>
  )
}

export default Footer