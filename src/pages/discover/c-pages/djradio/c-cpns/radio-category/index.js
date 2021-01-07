import React, { memo, useEffect } from "react";

import { CategoryWrapper, CategoryContent, CategoryItemImage } from "./style";
import {
  getRadioCategories,
  changeCurrentIdAction,
} from "../../store/actionsCreators";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import { Carousel } from "antd";

const PAGE_SIZE = 16;
export default memo(function HYRadioCategory() {
  // redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRadioCategories());
  }, [dispatch]);

  const { categories, currentId } = useSelector((state) => ({
    categories: state.get("djradio").get("categories"),
    currentId: state.get("djradio").get("currentId"),
  }));

  //   other handlers
  const handleClick = (id) => {
    dispatch(changeCurrentIdAction(id));
  };
  const page = Math.ceil(categories.length / PAGE_SIZE);

  return (
    <CategoryWrapper>
      <div className="arrow arrow-left"></div>
      <CategoryContent>
        <Carousel className="dots">
          <div className="category-page">
            {categories.map((item, index) => {
              return (
                <div
                  onClick={(e) => {
                    handleClick(item.id);
                  }}
                  className={classnames("category-item", {
                    active: currentId === item.id,
                  })}
                >
                  <CategoryItemImage
                    className="image"
                    imgUrl={item.picWebUrl}
                  ></CategoryItemImage>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </Carousel>
      </CategoryContent>
    </CategoryWrapper>
  );
});
