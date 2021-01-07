import React, { memo } from "react";
import { HeaderWrapper } from "./style";

import PropTypes from "prop-types";

const HYThemeHeaderSmall = memo(function (props) {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="abc">{more}</a>
    </HeaderWrapper>
  );
});

HYThemeHeaderSmall.propTypes = {
  title: PropTypes.string.required,
  more: PropTypes.string,
};

export default HYThemeHeaderSmall;
