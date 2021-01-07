import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import classnames from "classnames";

import {

  changeCurrentIdAction,
  changePlayListAction,
} from "../../store/actionCreators";

import { getSizeImage } from "@/utils";

import { TopRankingWrapper } from "./style";

export default memo(function HYTopRanking(props) {
  // redux hooks
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      topList: state.get("ranking").get("topList"),
      currentIndex: state.get("ranking").get("currentIndex"),
    };
  }, shallowEqual);
  const currentIndex = state.currentIndex;
  // other hooks
  useEffect(() => {
    const id = state.topList[currentIndex] && state.topList[currentIndex].id;  
    if(!id) return ; 
    dispatch(changePlayListAction(id));

  }, [dispatch, state,currentIndex]);

  // functionHandler
  const changeIndex = (index) => {
    dispatch(changeCurrentIdAction(index));
    const id = state.topList[currentIndex].id;
    console.log(id);
    dispatch(changePlayListAction(id));
  };

  //   返回的 jsx
  return (
    <TopRankingWrapper>
      {state.topList.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体排行榜"}
            </div>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div
              onClick={(e) => changeIndex(index)}
              className={classnames("item", {
                'active': index === state.currentIndex,
              })}
            >
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopRankingWrapper>
  );
});
