import {
  Box,
  Icon,
  Text,
  Button,
  Input
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RDetailCard } from "../components/RDetailCard";
import { getReservationDetail } from "../../../api/Reservation/getReservationDetail";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons";
import { TimeIcon } from "@chakra-ui/icons";
import { MdOutlineEventSeat } from "react-icons/md";


interface IData {
  venue: {
    name: string;
    description: string;
    category: string;
    capacity: number;
    chatRoomId: number;
    locationId: number;
    score: string;
    venueId: number;
    website_url: string;
    Venue_photo: string;
  };
  location: {
    address: string;
  };
  reservations: [
    {
      venueId: number;
      guest_amount: number;
      reserved_time: string;
      status: string;
      userId: number;
      entry_time: string;
      isReview: boolean;
      reservationId: number;
      depositId: number;
      isPaidDeposit: string;
      user: {
        username: string;
        hashed_password: string;
        fname: string;
        lname: string;
        email: string;
        profile_picture: string;
        addId: string;
        phone: string;
        tierId: number;
        userId: number;
        User_bio: string;
      };
      deposit: {
        deposit_amount: string;
        depositId: number;
        venueId: number;
      };
    }
  ];
}

export const ReservationDetail = () => {
  const [data, setData] = useState<IData>();
  const [isLoaded, setIsLoaded] = useState(false);
  const url = useSearchParams();
  console.log(url);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const seats = searchParams.get("count");

  useEffect(() => {
    fetchData();
    // console.log("FNAME" + data?.reservations[0].user.fname);
  }, []);

  const fetchData = async () => {
    const response: IData = await getReservationDetail(1, 46);
    setData(response);
    setIsLoaded(true);
  };

  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  {console.log(name)}
  {console.log(phonenumber)}
  {console.log(date)}
  {console.log(time)}
  let navigate = useNavigate();
  const toGetRD = () => {
    const path = "/getreservation-detail";
    navigate(path);
  };
  const render = () => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center the content horizontally
        justifyContent="center"
      >
        <RDetailCard />

        {/* This will push the reservation detail to the bottom */}
        <Box
          width="393px"
          height="480px"
          flexShrink={0}
          borderRadius="20px 20px 0px 0px"
          background="var(--Dark-background, #200944)"
          boxShadow="0px -4px 30px 0px #B921B2"
        >
          {/* Your Reservation Detail content goes here */}
          <Box
            width="369px"
            height="310px"
            flexShrink={0}
            borderRadius="20px"
            background="#DEBEF6"
            marginTop="16px"
            marginLeft="12px" // Adjust margin top as needed
          >
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft={15}
              padding={19}
            >
              Reservation information
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft={34}
              marginTop="4px"
            >
              Name :
            </Text>
            <Box mt={"5px"}>
              <Input
                placeholder="enter your name"
                htmlSize={4}
                backgroundColor={"white"}
                textColor={"black"}
                borderStyle={"black"}
                ml={"34px"}
                width="163px"
                height={"25px"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft={34}
              marginTop="10px"
            >
              {/* {data?.reservations[0].user.fname} */}
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft={34}
              marginTop={11}
            >
              Phone Number :
            </Text>
            <Box
            mt={"5px"}>
              <Input
                placeholder="enter phone no."
                htmlSize={4}
                backgroundColor={"white"}
                textColor={"black"}
                borderStyle={"black"}
                ml={"34px"}
                width="163px"
                height={"25px"}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </Box>
            <CalendarIcon
              w={"20px"}
              h={"20px"}
              color={"black"}
              ml={"40px"}
              mt={"20px"}
            />
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="71px"
              marginTop="-17px"
            >
              Date :
            </Text>
            {/* <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="120px"
              marginTop="-14px"
            >
              11/11/23
            </Text> */}
            <Box
            marginLeft="120px"
            marginTop="-20px">
            <Input
              placeholder="Select Date"
              size="md"
              type="date"
              backgroundColor={"white"}
              textColor={"black"}
              width="163px"
              height={"25px"}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            </Box>
            <TimeIcon
              w={"20px"}
              h={"20px"}
              color={"black"}
              ml={"40px"}
              mt={"20px"}
            />
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="71px"
              marginTop="-17px"
            >
              Time :
            </Text>

            {/* <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="120px"
              marginTop="-14px"
            >
              11.11 pm
            </Text> */}
            <Box
            marginLeft="120px"
            marginTop="-20px">
            <Input
              placeholder="Select Time"
              size="md"
              type="time"
              backgroundColor={"white"}
              textColor={"black"}
              width="163px"
              height={"25px"}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
            </Box>
            <Icon ml={"38px"} mt={"15px"} width="35px" height="35px">
              <MdOutlineEventSeat style={{ color: "black" }} />
            </Icon>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="71px"
              marginTop="-30px"
            >
              Seats :
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="120px"
              marginTop="-14px"
            >
              {seats}
            </Text>
            {/* Additional content goes here */}
          </Box>
          <Box
            width="360px"
            height="1px"
            background="#DEBEF6"
            marginTop="18px"
            marginLeft="18px"
          ></Box>
          <Text
            color="#F6F6F6"
            fontFamily="Roboto"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            marginLeft="26px"
            marginTop="22.01"
          >
            Reservation fee
          </Text>
          <Text
            //   as='big'
            color="#F6F6F6"
            fontFamily="Roboto"
            fontSize="20px"
            fontStyle="normal"
            fontWeight="700"
            // lineHeight="normal"
            marginLeft="288px"
            marginTop="-24px"
          >
            200 Baht
          </Text>
          <Box
            width="360px"
            height="1px"
            background="#DEBEF6"
            marginTop="18px"
            marginLeft="18px"
          ></Box>
          <Button
            borderRadius="10px"
            width="128px"
            height="36px"
            backgroundColor="#A533C8"
            textColor="white"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
            marginTop="15px"
            marginLeft="133px"
            onClick={toGetRD}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    );
  };

  return isLoaded ? render() : <div>Loading...</div>;
};
