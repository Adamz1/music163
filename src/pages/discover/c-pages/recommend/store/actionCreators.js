import * as actionTypes from "./contants";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopRankings,
  getSettleArtist

} from "@/services/recommend.js";

//  推荐数据

const changeHotRecommends = (res) => {
  return {
    type: actionTypes.CHANEG_HOT_RECOMMENDS,
    hotRecommends: res,
  };
};

//  上新数据

const changeNewAlbums = (res) => {
  return {
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbum: res.albums,
  };
};
const changeTopBannersActions = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

// 排行榜的数据
//  上升榜
const changeUpRankings = (res) => {
  return {
    type: actionTypes.CHANGE_UP_RANKINGS,
    upRankings: res.playlist,
  };
};

// 飙升榜
const changeNewRankings = (res) => {
  return {
    type: actionTypes.CHANGE_NEW_RANKINGS,
    newRankings: res.playlist,
  };
};

// 歌手入驻榜
  const changeSettleSinger =(res)=> {
    return {
      type: actionTypes.CHANGE_SETTLEARTIST,
      settleArtist: res
    }
  }

// 原创榜

const changeOriginRankings = (res) => {
  return {
    type: actionTypes.CHANGE_ORIGIN_RANKINGS,
    originRankings: res.playlist,
  };
};

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      console.log(res);
      dispatch(changeTopBannersActions(res));
    });
  };
};

export const getHRecommendsActions = () => {
  return (dispatch) => {
    getHotRecommends().then((res) => {
      console.log(res.result);
      dispatch(changeHotRecommends(res.result));
    });
  };
};

export const getNewAlbumActions = () => {
  return (dispatch) => {
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbums(res));
    });
  };
};

export const getTopRankingsActions = (id) => {
  return (dispatch) => {
    getTopRankings(id).then((res) => {
      switch (id) {
        case 0:
          dispatch(changeUpRankings(res));
          break;

        case 2:
          dispatch(changeNewRankings(res));
          break;

        case 3:
          dispatch(changeOriginRankings(res));
          break;

        default:
          break;
      }
      dispatch(changeUpRankings(res));
    });
  };
};

// 更改入驻歌手   
export const getSettleArtistAction = ()=> {
  return (dispatch)=> { 
    getSettleArtist(5,5001).then((res)=> {  
      dispatch(changeSettleSinger(res))
    })
  }
}