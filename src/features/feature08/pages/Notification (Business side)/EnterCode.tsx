import { Image, Box } from "@chakra-ui/react";

export const EnterCode = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={[3, 5, 7]} // Responsive margin for different screen sizes
      width={["100%", "80%", "70%"]} // Responsive width for different screen sizes
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "50%" }}
        maxH={{ base: "100%", sm: "50%" }}
        src="https://promptpay.io/0835753909/500.png"
        alt="QR CODE"
        margin={5}
      />
    </Box>
  );
};
