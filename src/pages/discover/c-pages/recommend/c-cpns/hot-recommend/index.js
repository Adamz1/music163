import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { RecommendWrapper } from "./style";

import { getHRecommendsActions } from "../../store/actionCreators";
import ThemeHeader from "@/components/theme-header-rcm";
import SongsCover from "@/components/songs-cover";
export default memo(function HYHotRecommend() {
  // state
  const [hotRecomend, setHotRecomend] = useState();

  // redux hooks
  const { hotRecommends } = useSelector((state) => {
    return {
      hotRecommends: state.get("recommend").get("hotRecommends"),
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {});
  // other hooks
  useEffect(() => {
    dispatch(getHRecommendsActions());
    setHotRecomend();
  }, [dispatch]);

  //   返回 jsx 代码
  return (
    <div>
      <RecommendWrapper>
        <ThemeHeader
          title="热门推荐"
          keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        ></ThemeHeader>
        <div className="recommend-list">
          {hotRecommends.map((item, index) => {
            return <SongsCover key={item.id} info={item}></SongsCover>;
          })}
        </div>
      </RecommendWrapper>
    </div>
  );
});
