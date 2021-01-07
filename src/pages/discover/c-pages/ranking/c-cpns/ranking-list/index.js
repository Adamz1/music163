import React, { memo } from "react";

import HYThemeHeader from "@/components/theme-header-song";
import { RankingListWrapper } from "./style";
import { useSelector } from "react-redux";

import { getSizeImage, formatMinuteSecond } from '@/utils'

export default memo(function HYRankingList(props) {
  // redux hooks
  const { playList } = useSelector((state) => ({
    playList: state.get("ranking").get("playList"),
  }));
  const tracks = playList.tracks || [];

  return (
    <RankingListWrapper>
      <HYThemeHeader />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="sing">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="rank-num"></div>
                    <span className="num">{index + 1}</span>
                    <span className="new sprite_icon2"></span>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span className="play sprite_table"></span>
                      <span className="name">{item.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  <td>{item.ar[0].name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  );
});