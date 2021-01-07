import React, { memo, useState } from "react";
import { SongListWrapper } from "./style";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import HYSongsCover from "@/components/songs-cover";
import HYPagination from "@/components/pagination";
import { getSongList } from "../../store/actionCreators";
export default memo(function HYSongList() {
  // hooks
  const [currentPage, setCurrentPage] = useState(1);
  // redux
  const dispatch = useDispatch();

  const { categorySongs } = useSelector((state) => {
    return {
      categorySongs: state.get("songs").get("categorySongs"),
    };
  }, shallowEqual);
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;

  //   function handler
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getSongList(page));
  };

  return (
    <SongListWrapper>
      <div className="song-list">
        {songList.map((item, index) => {
          return <HYSongsCover info={item} key={item.id} right="30px" />;
        })}
      </div>
      <HYPagination
        currentPage={currentPage}
        total={total}
        pageSize={35}
        onPageChange={onPageChange}
      />
    </SongListWrapper>
  );
});
