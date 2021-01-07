import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function HYPlayer() {
  // return jsx
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>playerinfo</h2>
          <h2>HYcontent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>HYsongs</h2>
          <h2>HYSimSongs</h2>
          <h2>download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
