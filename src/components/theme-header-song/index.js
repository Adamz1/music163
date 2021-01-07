import React, { memo } from 'react'

import {HeaderWrapper} from './style'
import { useSelector } from 'react-redux'

export default memo(function HYThemeHeaderSong(props) {     
    const {playList} = useSelector(state => ({
        playList: state.get('ranking').get('playList')
    }))

    return (
        <HeaderWrapper>
           <div className="left">
               <div className="title">歌曲列表</div>
               <div className="count">{playList.trackCount}首歌</div>
               </div> 
               <div className="right">
                   <span>播放</span>    
                   <span className="count">{playList.playCount}</span>
                   <span>次</span>
               </div>
        </HeaderWrapper>
    )
})
