import React, { memo } from 'react'
import {getSizeImage} from '@/utils'
import {CoverWrapper} from './style'
export default memo(function HYRadioRecommendCover(props) {
    const {info} =  props
    return (
        <CoverWrapper>
                <a href="">
                    <img src={getSizeImage(info.picUrl, 150)} alt=""/>
                </a>
                <a href="" className ="text-nowrap name">{info.name}</a>   
                <div className="text-nowrap">{info.desc}</div>
        </CoverWrapper>
    )
})