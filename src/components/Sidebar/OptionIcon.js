import React from "react";
import { IconSidebar } from "./styles";

export const OptionIcon = ({ text, Icon, active }) => {
  return (
    <IconSidebar active={active}>
      <div className="bar-icon">
        <Icon />
        <p>{text}</p>
      </div>
    </IconSidebar>
  );
};
