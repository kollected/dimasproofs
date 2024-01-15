import React from 'react'

import './AResponsivePage.scss'

export const AResponsivePage = () => (
  <div className='Main'>
    <h2>A responsive page</h2>
    <span>
      This page demonstrates the essential techniques of creating responsive components.
      The page is mostly designed to be viewed on mobile (iphone 14 pro max, 430px) or desktop.
    </span>
    <div className='Section'>
      <h3>Approach to images</h3>
      <div>
        <p>The image in this section uses a <code>&lt;picture&gt;</code> tag.</p>
        <p>
          This is normally used to improve loading times by serving different image sizes on different devices. To
          illustrate the point better, I'm just showing two different images.
        </p>
        <p>This description also moves below the image on smaller screens.</p>
      </div>
      <picture>
        <source srcSet='/assets/iphone.png' media='(max-width: 440px)' />
        <img src='/assets/macbook.png' alt='an image of a macbook' />
      </picture>
    </div>
    <h3>Font sizes</h3>
    <p className='BreakpointFontSize'>
      This paragraph's styling includes <code>@media</code> queries to determine its font size
    </p>
    <p className='ClampFontSize'>
      The font size of this paragraph is determined via <code>clamp</code> css function which makes it nice and fluid
    </p>
    <p className='CQFontSize'>
      Here, the font size and weight are determined via <code>@container</code> queries and <code>cqw</code> units
    </p>
  </div>
)