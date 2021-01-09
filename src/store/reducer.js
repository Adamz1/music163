import { combineReducers } from "redux-immutable";

// 导入各自的 reducer
import { reducer as reommendReducer } from "../pages/discover/c-pages/recommend/store/index";
import { reducer as playBarReducer } from "../pages/player/app-player-bar/store/index"; 
import {reducer as rankingReducer} from '../pages/discover/c-pages/ranking/store'
import {reducer as songReducer} from '../pages/discover/c-pages/songs/store'
import {reducer as djRadioReducer} from '../pages/discover/c-pages/djradio/store'
import {reducer as artistReducer} from '../pages/discover/c-pages/artist/store'
// 将分开的reducer 进行合并
const cReducer = combineReducers({
  recommend: reommendReducer,
  player: playBarReducer,
  ranking: rankingReducer,
  songs: songReducer,
  djradio: djRadioReducer,
  artist: artistReducer,
});
export default cReducer;
