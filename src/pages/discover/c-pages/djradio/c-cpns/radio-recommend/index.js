import React, { memo, useEffect } from "react";
import { RecommendWrapper } from "./style";
import HYThemeHeader from "@/components/theme-header-normal";
import { useSelector, useDispatch } from "react-redux";
import { getRadioRecommend } from "../../store/actionsCreators";

import HYRadioCover from "@/components/radio-recommend-cover";
export default memo(function HYRadioRecommend(props) {
  // redux
  const { categories, recommends, currentId } = useSelector((state) => ({
    categories: state.get("djradio").get("categories"),
    recommends: state.get("djradio").get("recommends"),
    currentId: state.get("djradio").get("currentId"),
  }));

  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getRadioRecommend(currentId));
  }, [currentId, dispatch]);
  return (
    <RecommendWrapper>
      <HYThemeHeader title="优秀新电台"></HYThemeHeader>
      <div className="radio-list">
        {recommends.slice(0, 5).map((item, index) => {
          return <HYRadioCover info={item} key={item.id}></HYRadioCover>;
        })}
      </div>
    </RecommendWrapper>
  );
});
