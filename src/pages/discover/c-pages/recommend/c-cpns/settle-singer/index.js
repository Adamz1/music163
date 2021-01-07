import React, { memo, useEffect, shallowEqual } from "react";
import { useDispatch, useSelector } from "react-redux";


import { SettleSongerWrapper } from "./style";

import { getSettleArtistAction } from "../../store/actionCreators";

import HYThemeHeaderSamll from "@/components/theme-header-small";

export default memo(function HYSettleSinger() {
  // react-redux hooks
  const dispatch = useDispatch();
  const { settleSingers } = useSelector((state) => {
    return {
      settleSingers: state.get("recommend").get("settleArtist"),
    };
  }, shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getSettleArtistAction());
  }, [dispatch]);

  // return jsx
  return (
    <SettleSongerWrapper>
      <HYThemeHeaderSamll title="入住歌手" more="查看全部" />
      <div className="singer-list">
        {/* {settleSingers.artists.map((item, index) => {
          return (
            <a href="/singer" key={item.index} className={item.id} className ="item">
              <img src={getSizeImage(item.img1v1Url)} alt="" />
              <div className="info">
                <div className="title">{item.alias.join("") || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          );
        })} */}

        <div className="apply-for">
            <a href="123">点击成为网易音乐人</a>
        </div>
      </div>
    </SettleSongerWrapper>
  );
});
