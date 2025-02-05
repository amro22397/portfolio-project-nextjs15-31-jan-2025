"use client"

import React from 'react'

import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
import { useLocale } from 'next-intl'

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();

    const locale = useLocale();

  return (
    <div className={containerStyles}>
        <button onClick={() => swiper.slidePrev()}
         className={btnStyles}>
            {locale === "en" ? (
              <PiCaretLeftBold className={iconStyles} />
            ) : (
              <PiCaretRightBold className={iconStyles} />
            )}
        </button>

        <button onClick={() => swiper.slideNext()}
        className={btnStyles}>
            {locale === "en" ? (
              <PiCaretRightBold className={iconStyles} />
            ) : (
              <PiCaretLeftBold className={iconStyles} />
            )}
        </button>

      
    </div>
  )
}

export default WorkSliderBtns
