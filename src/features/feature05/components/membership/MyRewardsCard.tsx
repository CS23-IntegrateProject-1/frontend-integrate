2;
import { Box, Image } from "@chakra-ui/react";
import { FC } from "react";
// import { FaRegEdit } from "react-icons/fa";
//import { useNavigate } from "react-router-dom";

interface RewardData {
  User_voucher: [
    {
      isUsed: boolean;
    }
  ];
  voucher_image: string;
  // Add other properties as needed
}

export const MyRewardsCard: FC<{
  data: RewardData;
}> = ({ data }) => {
  //const navigate = useNavigate();
  //const rewardId = data.voucherId;

  const status = data.User_voucher[0].isUsed;
  const img = data.voucher_image;
  // const color =
  //   status === "!isUsed" ? "red" : status === "In_progress" ? "blue" : "green";

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box
        pos={"relative"}
        w={"320px"}
        h={"129px"}
        overflow={"hidden"}
        marginTop={8}
        borderRadius={6}
      >
        <Image objectFit={"cover"} src={img} />
        <Box
          pos={"absolute"}
          // bg={color}
          bottom={2}
          right={2}
          borderRadius={10}
          px={"10px"}
        >
          {status}
        </Box>
        {/* <Box pos={"absolute"} top={2} right={1} borderRadius={10} px={"10px"}>
          {status === "In_progress" && (
            <Icon
              as={FaRegEdit}
              color={"#5F0DBB"}
          //     onClick={handleClickEdit}
            ></Icon>
          )}
        </Box> */}
      </Box>
    </Box>
  );
};
