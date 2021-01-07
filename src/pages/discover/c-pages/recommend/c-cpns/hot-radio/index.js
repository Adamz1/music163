import React, { memo } from "react";
import { HotRadioWrapper } from "./style";

import { hotRadios } from "@/services/localData";
import HYThemeHeader from "@/components/theme-header-small";

export default memo(function HYHotRadio() {
  return (
    <HotRadioWrapper>
      <HYThemeHeader title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
});
