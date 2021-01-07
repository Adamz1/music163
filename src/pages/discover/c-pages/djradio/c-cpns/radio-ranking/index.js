import React, { memo, useEffect, useState } from "react";
import { RankingWrapper } from "./style";

import { getRadios } from "../../store/actionsCreators";
import { useSelector, useDispatch } from "react-redux";

import HYThemeHeaderNormal from "@/components/theme-header-normal";
import HYRadioRankingCover from "@/components/radio-ranking-cover";
import HYPagination from "@/components/pagination";
export default memo(function HYRadioRanking(props) {
  // redux
  const dispatch = useDispatch();
  const { currentId, radios } = useSelector((state) => ({
    currentId: state.get("djradio").get("currentId"),
    radios: state.get("djradio").get("radios"),
  }));

  // hooks

  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadios(3, 0));
  }, [dispatch, currentId]);

  // handler
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getRadios(currentId, page * 30));
  };

  return (
    <RankingWrapper>
      <HYThemeHeaderNormal title="电音排行榜" />
      <div className="ranking-list">
        {radios.map((item, index) => {
          return <HYRadioRankingCover key={item.id} radio={item} />;
        })}
      </div>
      <HYPagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        total={1000}
        pageSize={30}
      />
    </RankingWrapper>
  );
});
