import { Box } from "@chakra-ui/react"
import { Completed } from "../../components/FoodDeliveryComp/Completed"
import FoodStatus from "../../components/FoodDeliveryComp/FoodStatusNavbar"
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";

function CompletedStatusPage(){
    const [completedOrders, setCompletedOrders] = useState<any[]>([]);

    useEffect(() => {
        const fetchOngoingOrders = async () => {
        try {
            const response = await Axios.get('feature4/showCompletedOrder');
            setCompletedOrders(response.data);
        } catch (error) {
            console.error('Error fetching ongoing orders:', error);
        }
        };

        fetchOngoingOrders();
    }, []);
    return(
    <Box>
        <FoodStatus/>
        {completedOrders.map((order) => (
        <Completed
          key={order.onlineOrderId}
          price={parseFloat(order.total_amount)}
          restaurantName={order.address}
          Driver={order.driver_note}
          OrderDate={new Date(order.order_date).toLocaleDateString()}
          licensePlate={order.LicensePlate} // Make sure to update this based on your data structure
        />
        ))}
    </Box>
    );
}


export default CompletedStatusPage;