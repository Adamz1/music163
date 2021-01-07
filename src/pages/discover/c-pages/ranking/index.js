import React, { memo, useEffect } from "react";

import { RankingWrapper, RankingLeft, RankingRight } from "./style";

import { changeTopListAction } from "./store/actionCreators";
import { useDispatch } from "react-redux";

import HYTopRanking from "../ranking/c-cpns/top-ranking/index";
import HYRankingHeader from "../ranking/c-cpns/ranking-header";
import HYRankingList from '../ranking/c-cpns/ranking-list'

export default memo(function HYRanks() {
  // redux-hooks
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(changeTopListAction());
  }, [dispatch]);
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <HYTopRanking />
      </RankingLeft>
      <RankingRight>
        <HYRankingHeader></HYRankingHeader>
        <HYRankingList></HYRankingList>
      </RankingRight>
    </RankingWrapper>
  );
});
