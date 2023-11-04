import { Box, Heading, Text } from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";

export const ArticleFooter = () => {
  return (
    <Box p={{base:"1em", md:"2em"}} bg={"#A533C8"} mx={{base:"-1em", md:"-2em"}} mb={{base:"-1em", md:"-2em"}} bottom={"0"}>
      <Box w={"60px"} h={"60px"} mb={"1em"} bg={"red"} rounded={"50%"}></Box>
      <Heading style={TextStyle.h1} mb={"1em"}>
        Written by username
      </Heading>
      <Text mb={"1em"}style={TextStyle.body2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem
        voluptates aperiam corporis veniam vel repudiandae quisquam cum maiores
        reiciendis, nisi quod doloremque. Ut eum deleniti, voluptatum a
        inventore ex.
      </Text>
    </Box>
  );
};
