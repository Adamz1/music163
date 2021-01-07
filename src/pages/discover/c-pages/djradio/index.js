import React, { memo } from 'react' 
import {DJRadioWrapper} from './style'

import HYRadioCategory from './c-cpns/radio-category'
import HYRadioRecommned from './c-cpns/radio-recommend'
import HYRadioRanking from './c-cpns/radio-ranking'
export default memo(function HYDjradio() {
    return (
        <DJRadioWrapper className = "wrap-v2">  
            <HYRadioCategory/>
            <HYRadioRecommned/>
            <HYRadioRanking/>
        </DJRadioWrapper>
    )
})
