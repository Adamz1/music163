import React, { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
// 导入路由中的地址 path 文件
import routes from "./router";
// 导入 redux 中的 store
import store from "./store";

// 导入公共的 footer 和 header
import HYAppHeader from "./components/app-header";
import HYAppFooter from "./components/app-footer";
import HYAppPlayerBar from "./pages/player/app-player-bar";

export default memo(function App() {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <HYAppHeader></HYAppHeader>
          <Suspense fallback={<div>loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
          <HYAppFooter></HYAppFooter>
          <HYAppPlayerBar />
        </HashRouter>
      </Provider>
    </div>
  );
});

// 总文件
