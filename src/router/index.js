import React from "react";
import { Redirect } from "react-router-dom";

//正常加载
// import HYDiscover from "../pages/discover";
// import HYRecommend from "../pages/discover/c-pages/recommend/index.js";
// import HYRanking from "../pages/discover/c-pages/ranking";
// import HYSongs from "../pages/discover/c-pages/songs";
// import HYDjradio from "../pages/discover/c-pages/djradio";
// import HYArtist from "../pages/discover/c-pages/artist";
// import HYAlbum from "../pages/discover/c-pages/album";
// import HYPlayer from "../pages/player";

// import HYFriend from "../pages/friend";
// import HYMine from "../pages/mine";

// 懒加载
const HYDiscover = React.lazy(() => import("../pages/discover"));
const HYRecommend = React.lazy(() =>
  import("../pages/discover/c-pages/recommend")
);
const HYRanking = React.lazy(() => import("../pages/discover/c-pages/ranking"));
const HYSongs = React.lazy(() => import("../pages/discover/c-pages/songs"));
const HYDjradio = React.lazy(() => import("../pages/discover/c-pages/djradio"));
const HYArtist = React.lazy(() => import("../pages/discover/c-pages/artist"));
const HYAlbum = React.lazy(() => import("../pages/discover/c-pages/album"));
const HYPlayer = React.lazy(() => import("../pages/player"));
const HYFriend = React.lazy(() => import("../pages/friend"));
const HYMine = React.lazy(() => import("../pages/mine"));

export default [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to={"/discover/recommend"} />,
      },
      {
        path: "/discover/recommend",
        component: HYRecommend,
      },
      {
        path: "/discover/order",
        component: HYRanking,
      },
      {
        path: "/discover/songMenu",
        component: HYSongs,
      },
      {
        path: "/discover/radio",
        exact: true,
        component: HYDjradio,
      },
      {
        path: "/discover/singers",
        component: HYArtist,
      },
      {
        path: "/discover/new",
        component: HYAlbum,
      },
      {
        path: "/discover/player",
        component: HYPlayer,
      },
    ],
  },
  {
    path: "/friend",
    component: HYFriend,
  },
  {
    path: "/mine",
    component: HYMine,
  },
];
