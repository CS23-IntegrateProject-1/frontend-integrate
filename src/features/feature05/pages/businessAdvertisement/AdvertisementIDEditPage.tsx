import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Icon,
  Select,
  Stack,
  Image,
  IconButton,
  useDisclosure,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { Input } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Axios } from "../../../../AxiosInstance";

interface AdvertisementProps {
  name: string;
  description: string;
  startingDate: Date | null;
  endingDate: Date | null;
  images: string;
  targetCustomer: string;
  targetGroup: string;
  advertisementPlan: number;
}
export const AdvertisementIDEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteModal = useDisclosure();
  const submitModal = useDisclosure();

  // const handleClickSubmit = async () => {
  //   await deleteVoucher();
  //   // navigate("/business/advertisement/status");
  // };
  
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [advertise, setAdvertise] = useState<AdvertisementProps>({
    name: "",
    description: "",
    images: "",
    startingDate: null,
    endingDate: null,
    targetCustomer: "",
    targetGroup: "",
    advertisementPlan: 0,
  });

  console.log(file);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      const previewURL = URL.createObjectURL(e.target.files[0]);
      setImagePreview(previewURL);
    }
  };
  const handleCloseImage = () => {
    setImagePreview(null);
  };
  useEffect(() => {
    fetchPlaceHolder();
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  });

  

  const fetchPlaceHolder = async () => {
    try {
      const { data } = await Axios.get(`/feature5/AdBSN/${id}`);

      setAdvertise((prevAdvertise) => ({
        ...prevAdvertise,
        name: data.name,
        description: data.description,
        images: data.image_url,
        startingDate: data.start_date,
        endingDate: data.end_date,
        targetCustomer: data.costumer_type,
        targetGroup: data.target_group,
        advertisementPlan: parseInt(data.cost),
      }));
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAdvertisement = async () => {
    try {
      const result = await Axios.delete(`/feature5/DeleteAdBSN/${id}`);
      console.log(result.data);
    } catch (error) {
      console.error("Error deleting advertisement:", error);
    }
  };

  const handleClickSubmit = async () => {
    try {
      await deleteAdvertisement();
      // Optionally, perform any additional actions after successful deletion
      navigate("/business/advertisement/status"); // Redirect to a different page, for instance
    } catch (error) {
      console.error(error);
      // Handle errors, if any, during the deletion process
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Name * */}
      <FormControl
        isRequired
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Name
        </FormLabel>
        <Input
          variant="name"
          value={advertise.name}
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="email"
        />
      </FormControl>

      {/* Description * */}
      <FormControl
        isRequired
        paddingBottom={3}
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
      >
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Description
        </FormLabel>
        <Input
          variant="name"
          value={advertise.description}
          style={{ width: "auto" }}
          color={"white"}
          bgColor={"#5F0DBB"}
          borderColor={"#5F0DBB"}
          type="email"
        />
      </FormControl>

      {/* Starting Date * & Ending Date * */}
      <FormControl
        isRequired
        paddingBottom={3}
        width={"50%"}
        minWidth={"250px"}
        maxWidth={"400px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
      >
        <Box mr={"20px"} flex={"1"}>
          <FormLabel style={TextStyle.h2} color={"white"}>
            {" "}
            Starting Date
          </FormLabel>
          <Input
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderRadius={5}
            borderColor={"#5F0DBB"}
            //value={advertise.startingDate} //TONG WILL DO IT
          />
        </Box>

        <Box flex={"1"}>
          <FormLabel style={TextStyle.h2} color={"white"}>
            {" "}
            Ending Date
          </FormLabel>
          <Input
            id="fileInput"
            size={"xs"}
            type="date"
            color="white"
            bgColor={"#5F0DBB"}
            borderRadius={5}
            borderColor={"#5F0DBB"}
            //TONG WILL DO IT
            //value
          />
        </Box>
      </FormControl>

      {/* Image */}
      {imagePreview ? (
        <FormControl
          isRequired
          width="50%"
          minWidth="250px"
          maxWidth="400px"
          display="flex"
          flexDirection={"column"}
          paddingBottom={3}
        >
          <FormLabel style={TextStyle.h2} color={"white"}>
            Image
          </FormLabel>

          <Box
            position={"relative"}
            overflow={"hidden"}
            width={"100%"}
            minWidth={"250px"}
            maxWidth={"400px"}
            height={"auto"}
            alignSelf={"center"}
          >
            <IconButton
              aria-label="close"
              minWidth={"15px"}
              height={"15px"}
              position={"absolute"}
              top={0}
              right={0}
              as={AiOutlineClose}
              onClick={handleCloseImage}
            ></IconButton>
            <Image
              src={`${import.meta.env.VITE_BACKEND_URL}${imagePreview}`}
              alt={"image"}
              width={"100%"}
            ></Image>
          </Box>
        </FormControl>
      ) : (
        <FormControl
          isRequired
          width="50%"
          minWidth="250px"
          maxWidth="400px"
          display="flex"
          flexDirection={"column"}
          paddingBottom={3}
        >
          <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
            {" "}
            Image
          </FormLabel>
          <Stack spacing={2} direction="column">
            {}
            <Center
              width={"auto"}
              height={"100"}
              bg={"#5F0DBB"}
              borderRadius={5}
              cursor={"pointer"}
            >
              <Input
                onChange={handleFileChange}
                type="file"
                opacity={0}
                height={"100%"}
                w={"100%"}
                pos={"absolute"}
              ></Input>
              <Icon
                as={BiImageAdd}
                color={"#FFFFFF"}
                width={"auto"}
                height={"8"}
              ></Icon>
            </Center>
          </Stack>
        </FormControl>
      )}

      {/* Target customer */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Target customer
        </FormLabel>
        <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
          <option value="option1">All</option>
          <option value="option2">Member</option>
        </Select>
      </FormControl>

      {/* Target group */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={3}
      >
        <FormLabel style={TextStyle.h2} color={"white"} paddingBottom={1}>
          {" "}
          Target group
        </FormLabel>
        <Select bgColor={"#5F0DBB"} borderColor={"#5F0DBB"} placeholder=" ">
          <option value="option1">Teen</option>
          <option value="option2">young Adult</option>
          <option value="option3">adult</option>
          <option value="option4">elder</option>
        </Select>
      </FormControl>

      {/* Advertisement plan */}
      <FormControl
        isRequired
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"column"}
        paddingBottom={6}
      >
        <FormLabel style={TextStyle.h2} color={"white"}>
          {" "}
          Advertisement plan
        </FormLabel>
        <RadioGroup defaultValue="2">
          <Stack spacing={1} direction="column">
            <Radio value="1">100 Baht/Week</Radio>
            <Radio value="2">300 Baht/Month</Radio>
            <Radio value="3">3600 Baht/Year</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Delete */}
      <Box
        width="50%"
        minWidth="250px"
        maxWidth="400px"
        display="flex"
        flexDirection={"row"}
        paddingBottom={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          h={"40px"}
          colorScheme="gray"
          variant="solid"
          width="50%"
          color="#A533C8"
          onClick={deleteModal.onOpen}
          marginRight={3}
        >
          Delete
        </Button>
        <Modal isOpen={deleteModal.isOpen} onClose={deleteModal.onClose}>
          <ModalOverlay />
          <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
            <ModalHeader mt={3}>Delete advertisement</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button
                bgColor={"white"}
                color={"#200944"}
                mr={5}
                width="30%"
                onClick={deleteModal.onClose}
              >
                Cancel
              </Button>
              <Button
                bgColor={"#A533C8"}
                mr={3}
                onClick={handleClickSubmit}
                color={"white"}
                width="30%"
              >
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button
          h={"40px"}
          backgroundColor="#A533C8"
          variant="solid"
          width="50%"
          color="white"
          onClick={submitModal.onOpen}
        >
          Submit
        </Button>
        <Modal isOpen={submitModal.isOpen} onClose={submitModal.onClose}>
          <ModalOverlay />
          <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
            <ModalHeader mt={3}>Submit advertisement</ModalHeader>
            <ModalCloseButton />
            <ModalFooter>
              <Button
                bgColor={"white"}
                color={"#200944"}
                mr={5}
                width="30%"
                onClick={submitModal.onClose}
              >
                Cancel
              </Button>
              <Button
                bgColor={"#A533C8"}
                mr={3}
                onClick={handleClickSubmit}
                color={"white"}
                width="30%"
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};
