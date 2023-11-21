import { NavLink } from "react-router-dom";
import {
  Box,
  Text,
  Card,
  CardBody,
  Heading,
  Image,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { Filter_Modal } from "./F3_FMCs/Filter_Modal";
import { SearchBar } from "./F3_HPCs/SearchBar";
import { FaFilter } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { FC } from "react";

interface VenueData {
  id: number;
  venueId: number;
  name: string;
  description: string;
  category: string;
  capacity: string;
  location: string;
  score: string;
  website_url: string;
}

interface VenueRate {
  id: number;
  venueId: number;
  rating: string;
}

export const RestaurantPage: FC = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isLoading: venueDataLoading,
    isError: venueDataError,
    data: venueDataData,
  } = useQuery<VenueData[]>({
    queryKey: ["getVenues"],
    queryFn: async () => {
      const { data } = await Axios.get("/feature3/venues");
      return data;
    },
  });

  const {
    isLoading: venueRateLoading,
    isError: venueRateError,
    data: venueRateData,
  } = useQuery<VenueRate[]>({
    queryKey: ["getVenueRates"],
    queryFn: async () => {
      const { data } = await Axios.get("/feature3/venue-ratings");
      return data;
    },
  });

  if (venueDataLoading || venueRateLoading) {
    return (
      <span>
        <FullPageLoader />
      </span>
    );
  }

  if (venueDataError || venueRateError) {
    return <span>An error occurred: </span>;
  }

  return (
    <Box width={"100%"} px={{ base: "none", lg: "30px" }}>
      <Flex direction="row" pt={{ base: "2", lg: "0" }}>
        <SearchBar />
        <Flex
          direction="column"
          ml="3"
          _hover={{ color: "brand.100" }}
          onClick={onOpen}
        >
          <FaFilter fontSize="25px" />
          <Text fontSize="15px" transform="translateX(-3px)">
            Filter
          </Text>
          <Filter_Modal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Flex>

      <Box
        display="grid"
        width="100%"
        gridTemplateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
        overflow="hidden"
        mt={{ base: "3", lg: "8" }}
        px={{ base: "none", lg: "10px" }}
        justifyItems={"center"}
      >
        {venueDataData.map((venueD) => (
          <Card
            minW={{ base: "250px", lg: "350px" }}
            width="sm"
            borderRadius="2xl"
            bg="brand.200"
            key={venueD.venueId}
            mb={8}
          >
            <CardBody>
              <Image
                src={venueD.pic}
                alt={venueD.name}
                borderRadius="lg"
                w="100%"
                h="160px"
                bgColor={"white"}
              />
              <Heading color="white" size="md" mt="4">
                {venueD.name}
              </Heading>
            </CardBody>
            <Flex
              direction="row"
              justify="center"
              width="100%"
              pl="5"
              pr="5"
              pb="5"
            >
              <NavLink to={`/Branches/${venueD.venueId}`}>
                <Button
                  variant="solid"
                  textColor="white"
                  bgColor="brand.300"
                  _hover={{ bgColor: "brand.100", textColor: "black" }}
                  w="160px"
                >
                  Branches
                </Button>
              </NavLink>
            </Flex>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
