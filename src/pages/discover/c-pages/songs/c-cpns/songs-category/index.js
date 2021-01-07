import React, { memo } from "react";

import { CategoryWrapper } from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {
  changeCurrentCategoryAction,
  getSongList,
  changeSongCategory,
} from "../../store/actionCreators";
export default memo(function HYSongsCategory(props) {
  // redux hooks
  const { category } = useSelector((state) => {
    return {
      category: state.getIn(["songs", "category"]),
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  //   other handler

  const selectCategory = (name) => {
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getSongList(0));
  };

  return (
    <CategoryWrapper>
      <div className="arrow sprite-icon"></div>
      <div className="all">
        <span className="link" onClick={(e) => selectCategory("全部")}>
          全部风格
        </span>
      </div>
      <div className="category">
        {category.map((item, index) => {
          return (
            <dl key={item.name} className={"item" + index}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((Sitem) => {
                  return (
                    <div
                      className="item"
                      key={Sitem.name}
                      onClick={(e) => {
                        selectCategory(Sitem.name);
                      }}
                    >
                      <span className="link">{Sitem.name}</span>
                      <span className="divider">|</span>
                    </div>
                  );
                })}
              </dd>
            </dl>
          );
        })}
      </div>
    </CategoryWrapper>
  );
});
