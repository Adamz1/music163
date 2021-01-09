import React, { memo } from 'react'
import {HYArtistWrapper}from './style'
import HYArtistCategory from '../artist/artist-category'
import HYArtistList from '../artist/artist-list'
import HYArtistListItem from  '../artist/artist-list/c-cpns/artist-item'

export default memo(function HYArtist() {
    return (
        <HYArtistWrapper >
            <div className="content wrap-v2">
            <HYArtistCategory/>
                <HYArtistList />
                <HYArtistListItem/>

            </div>
             
        </HYArtistWrapper>
    )
})
 