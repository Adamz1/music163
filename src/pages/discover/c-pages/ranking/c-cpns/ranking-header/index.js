import React, { memo, useEffect } from "react";
import { RankingHeaderWrapper } from "./style";
import { useSelector, shallowEqual } from "react-redux";
// import { formatMonthDay } from "@/components/radio-ranking-cover/node_modules/@/utils";
import HYSongOperationBar from "@/components/song-operation-bar";

export default memo(function HYRankingHeader(props) {
  // redux hooks
  const {playList} = useSelector(
    (state) => ({
      playList: state.get("ranking").get("playList"),
    }),
    shallowEqual
  );
  const topInfo = playList;
  useEffect(() => {     
      console.log(123)  
      console.log(topInfo)
  }, [])
    return (
      <RankingHeaderWrapper>
        <div className="image">
          <img src={topInfo.coverImgUrl} alt="" />
          <span className="image_cover">封面</span>
        </div>
        <div className="info">
          <div className="title">{topInfo.name}</div>
          <div className="time">
            <i className="clock sprite_icon2"></i>
            {/* <div>最近更新 :{formatMonthDay(topInfo.updateTime)} </div> */}
            <div className="update-f">({"每日更新:TODO"})</div>
          </div>
          <HYSongOperationBar
            favorTitle={`(${topInfo.subscribedCount})`}
            shareTitle={`(${topInfo.shareCount})`}
            downloadTitle="下载"
            commentTitle={`(${topInfo.commentCount})`}
          ></HYSongOperationBar>
        </div>
      </RankingHeaderWrapper>
    )
});
