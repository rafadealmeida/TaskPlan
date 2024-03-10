import { Task } from '@/services/firebase/controller/Task';
import {
  Button,
  ButtonText,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
  VStack,
  Text,
} from '@gluestack-ui/themed';
import React, { useState } from 'react';

export const AddTask = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const createTask = async () => {
    if (inputValue !== '') {
      await Task.add(inputValue);
      setIsInvalid(false);
      clearName();
    } else setIsInvalid(true);
  };
  const clearName = () => {
    setInputValue('');
  };

  return (
    <VStack w="$80" space="lg" alignSelf="center">
      <Input
        width="$full"
        variant="outline"
        size="sm"
        bg="$backgroundDark800"
        h={45}
        isInvalid={isInvalid}
      >
        <InputField
          placeholder="Nome da Tarefa"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <InputSlot pr="$1.5">
          <Button
            size="xs"
            variant="solid"
            action="primary"
            bgColor="$black"
            rounded={10}
            my={10}
          >
            <ButtonText onPress={createTask}>Adicionar</ButtonText>
          </Button>
        </InputSlot>
      </Input>
      {isInvalid && (
        <Text color="$red400" size="xs">
          O nome da tarefa é obrigatório
        </Text>
      )}
    </VStack>
  );
};
