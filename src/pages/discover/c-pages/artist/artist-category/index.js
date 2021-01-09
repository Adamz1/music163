import React, { memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import classname from "classnames";
import { artistCategories } from "@/services/localData";
import {
  changeCurrentAreaAction,
  changeCurrentTypeAction,
} from "../../artist/store/actionCreators";
import { CategoryWrapper, CategoryItem } from "./style";

export default memo(function HYArtistCategory(props) {
  // redux
  const dispatch = useDispatch();
  const { currentArea, currentType, artistList } = useSelector(
    (state) => ({
      currentArea: state.get("artist").get("currentArea"),
      currentType: state.get("artist").get("currentType"),
      artistList: state.get("artist").get("artistList"),
    }),
    shallowEqual
  );


  // handler
  const selectArtist = (area, item ) => {  
      dispatch(changeCurrentTypeAction(item))
      dispatch(changeCurrentAreaAction(area))
  };

  const renderArtist = (artists, area) => {
    return (
      <div>
        {artists.map((item, index) => {
          const isSelect = currentArea === area && currentType.type ==item.type;
          return (
            <CategoryItem
              key={item.name}
              className={classname({ active: isSelect })}
            >
              <span onClick={(e) => selectArtist(area, item)}>{item.name}</span>
            </CategoryItem>
          );
        })}
      </div>
    );
  };

  const selecyArtist = (area, type) => {};

  return (
    <CategoryWrapper>
      {artistCategories.map((item, index) => {
        return (
          <div className="section" key={item.area}>
            <h2 className="title">{item.title}</h2>
            {renderArtist(item.artists, item.area)}
          </div>
        );
      })}
    </CategoryWrapper>
  );
});
