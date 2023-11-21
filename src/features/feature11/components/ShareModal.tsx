import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FC, useRef } from "react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export const ShareModal: FC<ShareModalProps> = ({ isOpen, onClose, url }) => {
    const inputRef = useRef(null);

    const copyToClipboard = () => {
      if (inputRef.current) {
        // inputRef.current.select();
        document.execCommand('copy');
      }
    };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={"brand.100"}>
        <ModalHeader color={"black"}>Share this article!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup size="md">
            <Input
              ref={inputRef}
              value={url}
              readOnly
              pr="4.5rem"
              placeholder="Copyable url"
              color="black"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={copyToClipboard}>
                Copy
              </Button>
            </InputRightElement>
          </InputGroup>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="brand" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
