import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "antd";

export default memo(function HYPagination(props) {
  // 导入
  const { currentPage, total, onPageChange } = props;
  // function handler
  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <button className="control prev">上一页</button>;
    }
    if (type === "next") {
      return <button className="control next">下一页</button>;
    }
    return originalElement;
  }
  return (
    <PaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={35}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange}
      />
    </PaginationWrapper>
  );
});
