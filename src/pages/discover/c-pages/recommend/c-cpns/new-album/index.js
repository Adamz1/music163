import React, { memo, useEffect,useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import HYThemeHeaderRCM from "@/components/theme-header-rcm";   
import HYAlbumCover from '@/components/albumCover'


import { Carousel } from "antd";

import { AlbumWrapper } from "./style";



import { getNewAlbumActions } from "../../store/actionCreators";

export default memo(function HYNewAlbum(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumActions());
  }, [dispatch]);

  const albumRef = useRef()

  const { newAlbum } = useSelector((state) => {
    return {
      newAlbum: state.get("recommend").get("newAlbum"),
    };
  }, shallowEqual);

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架"></HYThemeHeaderRCM>
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick ={e=> albumRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref = {albumRef} >
            {[0, 1].map((item, index) => {
              return (
                <div key={item} className="page">
                  {
                      newAlbum.slice(item*5, (item+1)*5).map((album,index)=>{
                          return (  
                            <HYAlbumCover  key = {album.title} info = {album} size ={100} width = {118} bgp ="-570px"></HYAlbumCover>
                          )
                      })
                  }
                </div>
              );
            })}
          </Carousel>
          ,
        </div>
        <button className="arrow arrow-right sprite_02" onClick ={e=> albumRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  );
});
