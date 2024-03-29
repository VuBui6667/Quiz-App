import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Box, BoxProps } from "@mui/material";

const BoxComponent = forwardRef((props: BoxProps, ref) => (
  <Box {...props} ref={ref} />
))

BoxComponent.displayName = "MotionBox";

const MotionBox = motion(BoxComponent);

export default MotionBox