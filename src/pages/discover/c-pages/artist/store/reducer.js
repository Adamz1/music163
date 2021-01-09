import { Map } from "immutable";
import {
  CHANGE_CURRENT_AREA,
  CHANGE_CURRENT_TYPE ,
  CHANGE_ARTIST_LIST,
} from "./constants";

const defaultState = Map({
  currentArea: 7,
  currentType: {
    name: "推荐歌手",
    type: 1,
  },
  artistList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
      case CHANGE_CURRENT_AREA : {
          return state.set('currentArea', action.currentArea)
      }
      case CHANGE_CURRENT_TYPE : {
        return state.set('currentType', action.currentType )
    }
    case CHANGE_ARTIST_LIST : {
        return state.set('artistList', action.artistList)
    }
    default:
      return state;
  }
}

export default reducer;
