import { getArtistList } from "@/services/artist";
import * as actionTypes from "./constants";

export const getArtistListAC = (area, type, alpha) => {
    console.log('调用了')
  return (dispatch) => {
    getArtistList(area, type, alpha).then((res) => {
        console.log(res)
        dispatch(changeArtistListAction(res.artists))
    });
  };
};
export const changeCurrentAreaAction = (area) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea: area,
});
export const changeCurrentTypeAction = (type) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType: type,
});


const changeArtistListAction = (artistList)=> ({
    type: actionTypes.CHANGE_ARTIST_LIST,
    artistList: artistList
})