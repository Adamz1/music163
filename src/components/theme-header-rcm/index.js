import React, { memo } from "react";

import { HeaderWrapper } from "./style";
export default memo(function HYThemeHeaderRcm(props) {
    // 给 keywords 一个默认值, 当没取到值得时候 给一个默认值
  const { title,keywords =[] } = props;
  
  return (
    <HeaderWrapper className ="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className ="item" key = {item.title}>
                <a href="todo">{item}</a>
                <span className = "divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="#">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});
