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
import { Task } from '@/services/firebase/controller/Task';

export const ModalEdit = ({ title, id }: { title: string; id: string }) => {
  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
  const [inputValue, setInputValue] = useState<string>(title);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const editTask = async () => {
    if (inputValue !== '') {
      await Task.edit(id, inputValue);
      setIsInvalid(false);
      setShowModal(false);
    } else {
      resetName();
      setIsInvalid(true);
    }
  };

  const resetName = () => setInputValue(title);
  return (
    <Center width={1}>
      <Button
        borderRadius="$full"
        size="sm"
        p="$1"
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
            <Input variant="outline" size="md" isInvalid={isInvalid}>
              <InputField
                placeholder="Digite o nome da tarefa"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
              />
            </Input>
            {isInvalid && (
              <Text color="$red400" size="xs">
                O nome da tarefa é obrigatório
              </Text>
            )}
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
                editTask();
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
