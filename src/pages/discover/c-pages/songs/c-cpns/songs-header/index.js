import React, { memo, useState} from "react";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import HYSongsCategory from '../songs-category'
export default memo(function HYSongsHeader() {
  //  hooks
  const [showCategory, setShowCategory] = useState(false);

    const {currentCategory} =  useSelector(state=> {
        return ({
            currentCategory: state.getIn(["songs","currentCategory"])
        })
    }, shallowEqual)

    // handler 
    const handleBarChange =()=> {
        console.log(123 )
        setShowCategory(!showCategory)
    }



  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick = {e=> handleBarChange()}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? <HYSongsCategory/> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  );
});
