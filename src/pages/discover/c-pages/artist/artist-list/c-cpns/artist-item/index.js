import React, { memo, useEffect } from "react";
import { ItemWrapper } from "./style";
import { getSizeImage } from "@/utils";
export default memo(function HYArtistItem(props) {
  const { info, index } = props;
  useEffect(() => {
    console.log(info, index);
  }, []);
  return (
    <ItemWrapper>
      {index < 10 && (
        <div className="image">
          <img src={getSizeImage(info.img1v1Url, 130)} alt="" />
          <div className="info">
            <span>{info.name}</span>
            <i className="icon sprite_icon2"></i>
          </div>
        </div>
      )}
      <div className="info"></div>
    </ItemWrapper>
  );
});
