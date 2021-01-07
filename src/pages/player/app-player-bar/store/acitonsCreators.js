import { getSongDetail, getSongLyrics } from "@/services/player";
import {
  CHANGE_SONGS,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAYLIST,
  CHANGE_SEQUENCE,
  CHANGE_LYRICS,
  CHANGE_CURRENT_LYRICS_INDEX
} from "./constants";

import { parseLyric } from "@/utils/parse-lyrics";

import { getRandom } from "@/utils/math-util.js";

const changeCurrentSongAction = (res) => {
  return {
    type: CHANGE_SONGS,
    currentSong: res,
  };
};

// 得到需要的歌曲的信息
export function getSongDetailActions(ids) {
  console.log("拿到了");
  // redux thunk 可以发送异步请求, 第一个参数为 dispatch 第二个参数为 getState
  return (dispatch, getState) => {
    const playList = getState().get("player").get("playList");
    const songIndex = playList.findIndex((song) => song.id === ids);
    let song = {};
    // 判断是否找到了 songIndex 找到了=>  修改 current_song_index, 和 currentSong
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndex(songIndex));
      song = playList[songIndex];
      console.log(songIndex);
      dispatch(changeCurrentSongAction(song));
      dispatch(getSongLyricsAction(song.id));
    } else {
      // 如果没有在 list 中 那么发送网络请求在网络上找 然后将找到的 song 放到列表中 同时改变 index 和 currentSong
      getSongDetail(ids).then((res) => {
        const song = res.songs[0];
        if (!song) return;
        const newPlayList = [...playList, song];
        dispatch(changePlayList(newPlayList));
        dispatch(changeCurrentSongAction(song));
        dispatch(changeCurrentSongIndex(newPlayList.index));
        dispatch(getSongLyricsAction(song.id));
      });
    }
  };
}

export const getSongLyricsAction = (id) => {
  return (dispatch) => {
    getSongLyrics(id).then((res) => {
      console.log("拿到歌词了");
      const lyrics = res.lrc.lyric;
      const lyricList = parseLyric(lyrics)
      dispatch(changeLyrics(lyricList));
    });
  };
};

export const changeLyricsIndexAciton  =(index)=> {
  return (dispatch)=> {
    dispatch(changeLyricsIndex(index))
  }
}









// 改变歌词
const changeLyrics = (lyricList) => ({
  type: CHANGE_LYRICS,
  lyricList
});
// 改变 playlist
const changePlayList = (playlist) => {
  return {
    type: CHANGE_PLAYLIST,
    playlist,
  };
};

// 改变 current index
const changeCurrentSongIndex = (index) => {
  return {
    type: CHANGE_CURRENT_SONG_INDEX,
    index,
  };
};

// 改变播放顺序
export const changeSequenceAction = (sequence) => {
  console.log(sequence);
  return {
    type: CHANGE_SEQUENCE,
    sequence,
  };
};

// 更换音乐的逻辑
export const changeCurrentSongAndIndex = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().get("player").get("sequence");
    let currentIndex = getState().get("player").get("currentSongIndex");
    const playList = getState().get("player").get("playList");

    switch (sequence) {
      case 1:
        let randomNum = getRandom(playList.length);
        while (currentIndex === randomNum) {
          randomNum = getRandom(playList.length);
        }
        currentIndex = randomNum;
        break;

      case 0:
        //顺序播放
        // dispatch(changeCurrentSongIndex(currentIndex += tag))
        currentIndex += tag;
        if (currentIndex > playList.length) currentIndex = 0;
        if (currentIndex < playList.length) currentIndex = playList.length - 1;
        break;
      default:
        break;
    }
    const currentSong = playList[currentIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndex(currentIndex));
    dispatch(getSongLyricsAction(currentSong.id));
  };
};


// 改变当前歌词的 index
const changeLyricsIndex = (index)=> ({
  type: CHANGE_CURRENT_LYRICS_INDEX, 
  index
})