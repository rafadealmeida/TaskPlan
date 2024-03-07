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
  EditIcon,
  Input,
  InputField,
} from '@gluestack-ui/themed';

export const ModalEdit = ({title}:{title:string}) => {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
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
        <ButtonIcon as={EditIcon} />
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
            <Heading size="lg">Editar Tarefa</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Input
              variant="outline"
              size="md"
            >
              <InputField placeholder="Digite o nome da tarefa" value={title} />
            </Input>
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
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Salvar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};
