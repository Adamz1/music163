import React, { memo } from "react";
import { AlbumWrapper } from "./style";

import {getSizeImage} from '@/utils'

export default memo(function HYAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="#" className="cover image_cover"></a>
      </div>
      <div className="album-info">
        <div className="name">{info.name > 10 ? info.name : info.name.slice(0, 6) }</div>
        <div className="artist">{info.artist.name.slice(0,5)}</div>
      </div>
    </AlbumWrapper>
  );
});