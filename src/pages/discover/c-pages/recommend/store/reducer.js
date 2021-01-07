import * as actionTypes from "./contants";

import { Map } from "immutable";
// 将 default state 用 immuatable js 包裹 每次修改的时候就返回一个新的对象 节约性能
const defaultState = Map({
  topBanners: [],
  hotRecommends:[], 
  newAlbum:[],
  upRankings: [],
  newRankings:[],
  originRankings:[],
  settleArtist: []
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS: {
      return state.set("topBanners", action.topBanners);
    }
    case actionTypes.CHANEG_HOT_RECOMMENDS: {
        return state.set('hotRecommends', action.hotRecommends )
    }
    case actionTypes.CHANGE_NEW_ALBUM:{
      return state.set("newAlbum",action.newAlbum)
    } 
    case actionTypes.CHANGE_UP_RANKINGS: {
      return state.set('upRankings', action.upRankings)
    }
    case actionTypes.CHANGE_NEW_RANKINGS: {
      return state.set('newRankings', action.newRankings)
    }
    case actionTypes.CHANGE_ORIGIN_RANKINGS: {
      return state.set('originRankings', action.originRankings)
    }
    case actionTypes.CHANGE_SETTLEARTIST:{
      return state.set('settleArtist', action.settleArtist)
    }
    default: {
    return state;
    }
  }
}
