import React from "react";
import Box from "components/atoms/Box";

// Icons
import ArrowRightUp from "./icons/ArrowRightUp.svg";
import EyeSlash from "./icons/EyeSlash.svg";
import ArrowDown from "./icons/ArrowDown.svg";
import PieChart from "./icons/PieChart.svg";
import Copy from "./icons/Copy.svg";
import ArrowsClockwise from "./icons/ArrowsClockWise.svg";
import TreeStructure from "./icons/TreeStructure.svg";
import Info from "./icons/Info.svg";
import Smiley from "./icons/Smiley.svg";
import Github from "./icons/Github.svg";
import NewspaperClipping from "./icons/NewspaperClipping.svg";

const iconTypes = {
  ArrowRightUp: ArrowRightUp,
  EyeSlash: EyeSlash,
  ArrowDown: ArrowDown,
  PieChart: PieChart,
  Copy: Copy,
  ArrowsClockwise: ArrowsClockwise,
  TreeStructure: TreeStructure,
  Info: Info,
  Smiley: Smiley,
  Github: Github,
  NewspaperClipping: NewspaperClipping,
};

const Icon = ({ name, className, ...props }) => {
  let _Icon = iconTypes[name];
  return (
    <Box className={className}>
      <_Icon {...props} style={{ height: "100%", width: "100%" }} />
    </Box>
  );
};

export default Icon;
