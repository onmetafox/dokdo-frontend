import React from "react";
import { useScrollTrigger } from '@mui/material';

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
    // target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      background: trigger ? "#0B0B0F" : "transparent",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
    }
  });
};

const HeaderScroll = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default HeaderScroll;
