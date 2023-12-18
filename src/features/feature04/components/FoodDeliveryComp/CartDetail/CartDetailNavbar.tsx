import { Box,Flex,Text } from "@chakra-ui/react"
import index from "../../../../../theme/foundations/index"

interface resName{
    RestaurantName: string;
}
export const CartDetailNavbar=(prop: resName)=>{
    return(
    <Box>
        <Flex flexDir={"column"} alignItems={"center"}>
        <Text
          fontSize={index.textStyles.h4.fontSize}
          fontWeight={index.textStyles.body1.fontWeight}
          color={index.colors.white}
        >
          {prop.RestaurantName}
        </Text>
      </Flex>
    </Box>)
}