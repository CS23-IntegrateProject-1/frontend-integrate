import { Box } from "@chakra-ui/react"
import React, { useState } from "react";

export const ArticlesComponents = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Box
      width={"319px"}
      height={"170px"}
      bg={"brand.300"}
      m={"32px"}
      color={"white"}
      borderRadius={"10px"}
    >
      <img
        src={isHovered ? "/src/features/feature11/img/ArticlesNew.png" : "/src/features/feature11/img/ArticlesDefault.png"}
        alt=""
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      />
    </Box>
  );
};