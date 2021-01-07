import React, { memo } from "react";
import { TopRankingWrapper } from "./style";
import { getSizeImage } from "@/utils"; 
import {getSongDetailActions} from '../../pages/player/app-player-bar/store/acitonsCreators'
import { useDispatch } from "react-redux";
export default memo(function HYTopRankings(props) {
  // props and hooks
  const { info } = props;
  const { tracks = [] } = info;
// redux hooks  

 const dispatch = useDispatch()
  const playMusic =(item)=>{  
    console.log(item.id);
    dispatch(getSongDetailActions(item.id))

  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="#" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="#">{info.name}</a>
          <div>
            <button className="btn play sprite_02"> </button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play" onClick ={e=> playMusic(item)}></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer"></div>
    </TopRankingWrapper>
  );
});
