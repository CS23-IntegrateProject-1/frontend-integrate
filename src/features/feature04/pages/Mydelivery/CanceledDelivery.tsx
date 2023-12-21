import { Box,Flex,Text,IconButton } from "@chakra-ui/react";
import index from "../../../../theme/foundations/index"
import { MdKeyboardArrowRight } from "react-icons/md";
import FoodStatus from "../../components/FoodDeliveryComp/FoodStatusNavbar";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";
export const CanceledMyDelivery=()=>{
  const [canceledOrders, setCanceledOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOngoingOrders = async () => {
      try {
        const response = await Axios.get('feature4/showCanceledOrder');
        setCanceledOrders(response.data);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error fetching ongoing orders:', error);
      }
    };

    fetchOngoingOrders();
  }, []);
    return(
      <Box>
      <FoodStatus />
      <Flex justifyContent={"center"}>
        {canceledOrders.map((order) => (
          <Box
            key={order.onlineOrderId} // Use a unique key for each mapped component
            border={"solid 1.5px"}
            borderColor={index.colors.brand[100]}
            p={2}
            borderRadius={5}
            m={10}
            width={"auto"}
            maxWidth={500}
            minHeight={200}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <img
              src="https://www.mkrestaurant.com/public/uploads/mk_menu/images/33e10dd680609fd2de8cc182fd51f644.jpg"
              width="30%"
              height="30%"
              style={{ borderRadius: "5%", margin: 0 }}
              alt="Menu Item"
            />
            <Box flexDir={"row"}>
              <Text
                fontSize={index.textStyles.h1.fontSize}
                fontWeight={index.textStyles.h1.fontWeight}
              >
                {order.Venue_branch.branch_name}
              </Text>
              <Text
                fontSize={index.textStyles.body1.fontSize}
                fontWeight={index.textStyles.body1.fontWeight}
              >
                Date: {new Date(order.order_date).toLocaleDateString()}
              </Text>
              <Text
                fontSize={index.textStyles.body1.fontSize}
                fontWeight={index.textStyles.body1.fontWeight}
                >
                  Driver : {order.Driver_list.driver_first_name}
                </Text>
              <Flex alignItems={"flex-end"} justifyContent={"flex-end"} mt={5}>
                <Text
                  fontSize={index.textStyles.body1.fontSize}
                  fontWeight={index.textStyles.body3.fontWeight}
                  color={index.colors.red[300]}
                >
                  {order.status}
                </Text>
              </Flex>
            </Box>
            <IconButton
              size="sm"
              aria-label="Next"
              fontSize="1.5rem"
              variant={"unstyle"}
            >
              <MdKeyboardArrowRight />
            </IconButton>
          </Box>
        ))}
      </Flex>
    </Box>
    
    )
}