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
} from '@gluestack-ui/themed';
import React from 'react';

export const AddTask = () => {
  return (
    <VStack w="$80" space="lg" alignSelf="center">
      <Input
        width="$full"
        variant="outline"
        size="sm"
        bg="$backgroundDark800"
        h={45}
      >
        <InputField placeholder="Nome da Tarefa" />
        <InputSlot pr="$1.5">
          <Button
            size="xs"
            variant="solid"
            action="primary"
            bgColor="$black"
            rounded={10}
            my={10}
          >
            <ButtonText>Adicionar</ButtonText>
          </Button>
        </InputSlot>
      </Input>
    </VStack>
  );
};
