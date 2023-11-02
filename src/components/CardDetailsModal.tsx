import { CardDetailsModalProps } from "../types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function CardDetailsModal({ children }: CardDetailsModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        size="sm"
        radius="sm"
        onPress={onOpen}
        color="primary"
        variant="light"
      >
        Click for details
      </Button>

      <Modal
        size="lg"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent style={{width:"1000px", height:"750px",maxWidth:"1000px", maxHeight:"1000px"}}>
          {(onClose) => (
            <>
              <ModalHeader style={{maxWidth:"1000px", height:"600px"}}className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
