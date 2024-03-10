import React, { useState } from 'react';
import {
  Center,
  Text,
  Button,
  Modal,
  ButtonText,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  ModalFooter,
  ButtonIcon,
  TrashIcon,
} from '@gluestack-ui/themed';
import { Task } from '@/services/firebase/controller/Task';

export const ModalDelete = ({ title, id }: { title: string; id: string }) => {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);

  const deleteTask = async () => {
    try {
      await Task.remove(id);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Center>
      <Button
        borderRadius="$full"
        size="lg"
        p="$3.5"
        bg="$"
        width={5}
        onPress={() => setShowModal(true)}
        ref={ref}
      >
        <ButtonIcon as={TrashIcon} color="$red700" />
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Apagar Tarefa</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>{`Tem certeza que deseja apagar a tarefa: ${title}?`}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button
              size="sm"
              action="negative"
              borderWidth="$0"
              onPress={() => {
                deleteTask();
              }}
            >
              <ButtonText>Apagar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};
