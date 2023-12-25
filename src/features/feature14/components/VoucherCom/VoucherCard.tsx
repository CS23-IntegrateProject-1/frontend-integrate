import { Box, Button, Card, CardBody, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import IVoucherApprove from "../../../../interfaces/Voucher/IVoucherApprove";
import { useNavigate } from "react-router-dom";
import { RejectVou } from "../../../../api/Voucher/GetVoucherReject";
import { ApproveVou } from "../../../../api/Voucher/GetVoucherApprove";

export const VoucherCard: React.FC<IVoucherApprove & { isApprove: string }> = ({ voucher_name, voucherId, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleClickReject = () => {
    RejectVou(voucherId);
    navigate("/admin/voucher");
    // navigate(`/admin/voucher/${voucherId}/reject`);
    location.reload();
  };
  const handleClickConfirm = () => {
    ApproveVou(voucherId);
    navigate("/admin/voucher");
    location.reload();
  };
  return (
    <Card
      width="90%"
      minWidth="250px"
      maxWidth="400px"
      display="flex"
      flexDirection={"column"}
      border={"1px solid"}
      borderColor={"brand.100"}
      bg={"rgba(0, 0, 0, 0)"}
      color={"white"}
      mb={"10px"}
    >
      <CardBody>
        <Box>
          <Text pt="2" fontSize="md">
            ID: {voucherId}
            <br/>
            Name: {voucher_name}
            <br/>
            Description: {description}
          </Text>
        </Box>
        <Box
          width="50%"
          minWidth="250px"
          maxWidth="400px"
          display="flex"
          flexDirection={"row"}
          paddingBottom={3}
          justifyContent={"space-evenly"}
        >
          <Button
            colorScheme="gray"
            variant="solid"
            width="40%"
            color="#A533C8"
            onClick={handleClickReject}
          >
            Reject
          </Button>
  
          <Button
            backgroundColor="#A533C8"
            variant="solid"
            width="40%"
            color="white"
            onClick={onOpen}
          >
            Accept
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bgColor={"#DEBEF6"} color={"#200944"}>
              <ModalHeader mt={3}>The request has been approved</ModalHeader>
              <ModalCloseButton />
              <ModalFooter>
                <Button
                  bgColor={"white"}
                  color={"#200944"}
                  mr={5}
                  width="30%"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  bgColor={"#A533C8"}
                  mr={3}
                  onClick={handleClickConfirm}
                  color={"white"}
                  width="30%"
                >
                  Confirm
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </CardBody>
    </Card>
  );
};