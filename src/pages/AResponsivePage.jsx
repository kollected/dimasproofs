import React from 'react'

import './AResponsivePage.scss'

export const AResponsivePage = () => (
  <div className='Main'>
    <h3>A responsive page</h3>
    <span>
      This page is designed to demonstrate my ability to use essential techniques of creating responsive components.
      The page is mostly designed to be viewed on mobile (iphone 14 pro max, 430px) or desktop.
    </span>
    <div className='Section Grey'>
      <div>
        <p>The image in this section uses a <code>&lt;picture&gt;</code> tag.</p>
        <p>
          This is normally used to improve loading times by serving different image sizes on different devices. Here,
          however, I'm just showing two different images.
        </p>
      </div>
      <picture>
        <source srcSet='/assets/iphone.png' media='(max-width: 440px)' width='316px' />
        <img src='/assets/macbook.png' alt='an image of a macbook' />
      </picture>
    </div>
    <div className='Section'>
      <div className='BreakpointFontSize'>this paragraph's styling includes media queries to determine its font size
      </div>
      <div className='ClampFontSize'>the font size of this paragraph is determined via clamp function which makes it
        nice and fluid
      </div>
    </div>
  </div>
)