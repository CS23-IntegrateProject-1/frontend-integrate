import {
  Box,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import PlaceTypes from "../components/PlaceTypes";
import Cards from "../components/Card";
import Search from "../components/Search";
import Map from "../components/Map";
export const Maps = () => {
  const apiKey = "";

  const center = { lat: 13.6513, lng: 100.4964 };
  const zoom = 12;
  return (
    <Box>
      <PlaceTypes />
      <Map apiKey={apiKey} center={center} zoom={zoom} />
      <Search />
      <Cards
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WVAS29MBwowjBkkTA234c8Wmirp_2Dn0JO0oPhtibBew-6Rq"
        name="ABCC"
        description="lorem"
      />
    </Box>
  );
};
