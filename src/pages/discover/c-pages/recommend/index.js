import React, { memo, useEffect } from "react";

import TopBanners from "./c-cpns/top-banner";   
import HYHotRecommend from './c-cpns/hot-recommend' 

import HYNewAlbum from './c-cpns/new-album'
import HYRankings from './c-cpns/recommend-ranking'
import HYLogin from './c-cpns/user-login'
import HYSettleSinger from './c-cpns/settle-singer'
import HYHotRadio from './c-cpns/hot-radio'

import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

function HYRecommend() {
  return (
    <div>
      <RecommendWraper>
        <TopBanners></TopBanners>
        <Content className = "wrap-v2">
          <RecommendLeft>
          <HYHotRecommend/>
          <HYNewAlbum/>
          <HYRankings/>
          </RecommendLeft>
          <RecommendRight>
          <HYLogin/>
          <HYSettleSinger/>
          <HYHotRadio/>
          </RecommendRight>
        </Content>
      </RecommendWraper>
    </div>
  );
}
export default memo(HYRecommend);

// 通过 react-redux 和 connect 链接的
// // jsx 代码
// function HYRecommend(props) {
//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);
//   return <div>recommend {topBanners.length}</div>;
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
