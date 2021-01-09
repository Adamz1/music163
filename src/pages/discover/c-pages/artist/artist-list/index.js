import React, { memo } from "react";
import { ArtistListWrapper } from "./style";
import { useSelector } from "react-redux";
import HYArtistItem from "./c-cpns/artist-item";
import HYAlphaList from "./c-cpns/alpha-list";
import HYThemeHeaderNormal from "@/components/theme-header-normal";

export default memo(function HYArtistList(props) {
  // redux
  const { currentType,  artistList } = useSelector((state) => ({
    currentType: state.get("artist").get("currentType"),
    artistList: state.get("artist").get("artistList"),
  }));
  return (
    <ArtistListWrapper>
      <HYThemeHeaderNormal title={currentType.name}></HYThemeHeaderNormal>
      <HYAlphaList />
      <div className="artist-list">
        {artistList.map((item, index) => {
          return <HYArtistItem info={item} index={index} key={item.name} />;
        })}
      </div>
    </ArtistListWrapper>
  );
});
 