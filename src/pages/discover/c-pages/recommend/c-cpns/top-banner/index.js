import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";

import { Carousel } from "antd";

import { getTopBannerAction } from "../../store/actionCreators";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

export default memo(function HYTopBanners() {
  // 代码逻辑
  // 自己的 state
  const [currentIndex, setCurrentIndex] = useState(0);
  // 组件和 redux 关联
  const recommend = useSelector(
    (state) => ({
      topBanners: state.get("recommend").get("topBanners"),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  //   其他的 hooks
  const carousel = useRef(null);
  //   轮播图 有 from 和 to 两个参数 记录当前的轮播位置
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  });

  //   其他的逻辑
  //   双正的逻辑 只有全都是 true 才可以进行下一步操作
  const bgImg =
    recommend.topBanners[currentIndex] &&
    recommend.topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImg}>
      <div className="banner wrap-v2">
        <BannerLeft>
          {/* 轮播图 */}
          <Carousel
            effect="fade"
            autoplay
            ref={carousel}
            beforeChange={bannerChange}
          >
            {recommend.topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.url}>
                  <img className="image" src={item.imageUrl} alt="" />
                </div>
              );
            })}
          </Carousel>
          ,
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => carousel.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => carousel.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
