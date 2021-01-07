import { Map } from "immutable";
import * as actionTypes from './constants'
const defaultState = Map({
  category: [],
  currentCategory: "全部",
  categorySongs: {},
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY :{
        return state.set('category', action.category)
    }
    case actionTypes.CHANGE_CATEGORY_SONGS_LIST: {
        return state.set('categorySongs', action.categorySongs)
    }
    case actionTypes.CHANGE_CURRENT_CATEGORY: {
        return state.set('currentCategory',action.currentCategory)
    }
    default:
      return state;
  }
};
