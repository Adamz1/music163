import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";

import { getTopRankingsActions } from "../../store/actionCreators";

import { RankingWrapper } from "./style";

import HYTopRankings from "@/components/topRankings";

export default memo(function HYRecommendRanking(props) {
  const { upRankings, newRankings, originRankings } = useSelector((state) => {
    return {
      upRankings: state.get("recommend").get("upRankings"),
      newRankings: state.get("recommend").get("newRankings"),
      originRankings: state.get("recommend").get("originRankings"),
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRankingsActions(1));

    dispatch(getTopRankingsActions(2));
    dispatch(getTopRankingsActions(3));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="排行榜"></HYThemeHeaderRCM>
      <div className="tops">
        <HYTopRankings info={upRankings}></HYTopRankings>
        <HYTopRankings info={newRankings}></HYTopRankings>
        <HYTopRankings info={originRankings}></HYTopRankings>
      </div>
    </RankingWrapper>
  );
});
