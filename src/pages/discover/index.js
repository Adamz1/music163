import React, { memo, useEffect, useState, Suspense } from "react";
import { renderRoutes } from "react-router-config";

import { DiscoverWrapper, TopMenu } from "./style.js";

import { discoveryNavs } from "@/common/local-data.js";
import { NavLink } from "react-router-dom";

export default memo(function Discover(props) {
  const { route } = props;
  return (
    <div>
      <DiscoverWrapper>
        <div className="top">
          <TopMenu className="wrap-v1">
            {discoveryNavs.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })}
          </TopMenu>
        </div>
        {renderRoutes(route.routes)}

      </DiscoverWrapper>
    </div>
  );
});
