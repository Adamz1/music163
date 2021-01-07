import React, { memo, useEffect } from "react";

import { SongsWrapper } from "./style";
import { useDispatch } from "react-redux";

import HYSongsHeader from "./c-cpns/songs-header";
import HYSongsList from './c-cpns/songs-list'

import { changeSongCategory, getSongList, changeCurrentCategoryAction } from "../songs/store/actionCreators";
import { useLocation } from "react-router-dom";
export default memo(function HYSong() {
  // redux hooks
  const dispatch = useDispatch();

  // other hooks    
  const cat = useLocation();

  useEffect(() => {     
    changeCurrentCategoryAction('全部')
  }, [])

  useEffect(() => {
    dispatch(changeSongCategory());
    dispatch(getSongList(0))
  }, [dispatch]);
  return (
    <SongsWrapper  className ="wrap-v2">
      <HYSongsHeader></HYSongsHeader>
      <HYSongsList></HYSongsList>
    </SongsWrapper>
  );
});
