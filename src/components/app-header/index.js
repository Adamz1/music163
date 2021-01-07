import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import {Input} from 'antd'

import {SearchOutlined} from '@ant-design/icons'
import { headerLinks } from "@/common/local-data.js";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./styled";

export default memo(function HYAppHeader() {
  // 其他的业务逻辑代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01  icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };


  // 返回的 jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/discover" className="logo sprite_01"></a>
          <div>
            <div className="select-list">
              {headerLinks.map((item, index) => {
              return (
                  <div key={item.title} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                );
              })}
            </div>
          </div>
        </HeaderLeft>
        <HeaderRight>   
          <Input className = "search" placeholder ="今天想听什么呢" prefix ={<SearchOutlined/>}/>
          <div className ="center">创作者中心</div>
          <div className = "login">登陆</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
