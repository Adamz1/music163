import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  changeSequenceAction,
  changeCurrentSongAndIndex,
  getSongDetailActions,
  changeLyricsIndexAciton,
} from "./store/acitonsCreators";
import { Slider } from "antd";
import { NavLink } from "react-router-dom";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { message, Button } from "antd";

import { getSizeImage, formatMinuteSecond, getPlayUrl } from "@/utils";
import "./style";
import { is } from "immutable";
export default memo(function HYAppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(true);
  // redux hooks
  const dispatch = useDispatch();

  const { currentSong, sequence, lyricsList, currentLyricsIndex } = useSelector(
    (state) => {
      return {
        currentSong: state.get("player").get("currentSong"),
        sequence: state.get("player").get("sequence"),
        lyricsList: state.get("player").get("lyricsList"),
        currentLyricsIndex: state.get("player").get("currentLyricsIndex"),
      };
    },
    shallowEqual
  );

  //   other hooks
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((error) => {
        setIsPlaying(false);
        console.log(error);
      });
  }, [currentSong]);

  //   请求歌曲3 27927769

  useEffect(() => {
    dispatch(getSongDetailActions(458496083));
  }, [dispatch]);

  const audioRef = useRef();

  // otherhandle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const name = currentSong.ar && currentSong.ar[0].name;
  const duration = currentSong.dt || 0;
  const showCurrentTime = formatMinuteSecond(currentTime);

  //   handle funciton 处理函数
  const playmusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  // 获取当前的时间  currentTime
  const timeUpdate = (e) => {
    const currentTimeNow = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTimeNow * 1000);
      setProgress((currentTime / duration) * 100);
    }
    // 获取当前的歌词
    let i = 0;
    for (; i < lyricsList.length; i++) {
      let lyricsItem = lyricsList[i];
      if (currentTimeNow * 1000 < lyricsItem.time) {
        break; //找到了就跳出循环
      }
    }
    if (currentLyricsIndex !== i - 1) {
      dispatch(changeLyricsIndexAciton(i - 1));
      if (lyricsList !== [] && i >= 1) {
        message.open({
          content: lyricsList[i - 1].content,
          key: "lyric", //当key 出现的时候 只保留一个
          duration: 0,
          className: "lyric-class",
        });
      }
    }

    // console.log(lyricsList[currentLyricsIndex - 1]); // 将保存到的数据 保存到 redux中
  };

  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      setProgress(value);
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      if (!isPlaying) {
        playmusic();
      }
    },
    [duration, isPlaying, playmusic]
  );

  const slideAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);
    },
    [duration]
  );

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };

  const changeMusic = (tag) => {
    dispatch(changeCurrentSongAndIndex(tag));
  };

  const handleMusicEnd = () => {
    if (sequence == 2) {
      // 单曲循环
      console.log("单曲循环");
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      // 其他情况
      dispatch(changeCurrentSongAndIndex(1));
      // message.info(lyricsList[currentLyricsIndex]);
      console.log("下一首");
    }
  };
  //  通过 button 来控制 要不要静音 audio 元素
  const unMute = () => {
    setIsMute(!isMute);
  };
  //   返回的 jsx
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_player prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <buttonÎ
            className="sprite_player play"
            onClick={(e) => {
              playmusic();
            }}
          ></buttonÎ>
          <button
            className="sprite_player next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 34)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#" className="singer-name">
                {name}
              </a>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                onChange={sliderChange}
                onAfterChange={slideAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence} isMute={isMute}>
          <div className="left sprite_player">
            <div>hello</div>
            <btn className="sprite_player btn favor"></btn>
            <btn className="sprite_player btn share"></btn>
          </div>
          <div className="right sprite_player">
            <btn
              className="sprite_player btn volume"
              onClick={(e) => unMute()}
            ></btn>
            <btn
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}
            ></btn>
            <btn className="sprite_player btn playlist"></btn>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate} // 通过 timeUpdate 拿到的时间和 redux lyric 的时间戳 进行对比 然后在下面的组件中显示  (currentTime)
        onEnded={handleMusicEnd}
        muted={isMute}
      ></audio>
    </PlaybarWrapper>
  );
});
