import {
  HStack,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  CheckboxLabel,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { ModalEdit } from './ModalEdit';
import { ModalDelete } from './ModalDelete';
import { Task } from '@/services/firebase/controller/Task';
export const TodoItem = ({
  title,
  id,
  complete,
  createdAt,
  editable,
}: {
  title: string;
  id: string;
  complete: boolean;
  createdAt: any;
  editable: boolean;
}) => {
  const editTask = async () => {
    await Task.toggleStatus(id, !complete);
  };

  return (
    <HStack
      justifyContent="center"
      // mr={'6%'}
      backgroundColor="$backgroundDark800"
      my={4}
      pr={'4%'}
      py={4}
      borderRadius={4}
    >
      <HStack width={'70%'} justifyContent="flex-start">
        <Checkbox
          value={`${complete}`}
          isChecked={complete}
          // isDisabled={}
          onChange={() => (editable ? editTask() : null)}
          aria-label="CheckBox para marcar se a tarefa está feita ou não"
          ml={'-$5'}
        >
          <CheckboxIndicator
            mr="$4"
            style={{
              borderRadius: 20,
              borderColor: 'green',
              borderWidth: 3,
            }}
          >
            <CheckboxIcon
              as={CheckIcon}
              w="$3.5"
              h="$3.5"
              style={{
                backgroundColor: 'green',
                borderRadius: 100,
                overflow: 'hidden',
                borderColor: 'green',
              }}
            />
          </CheckboxIndicator>
          <VStack justifyContent="center" alignItems="flex-start">
            <CheckboxLabel>{title}</CheckboxLabel>
            <Text size="xs">
              {createdAt?.toDate()?.toLocaleDateString('pt-Br', {
                dateStyle: 'medium',
              })}
            </Text>
          </VStack>
        </Checkbox>
      </HStack>
      {editable && (
        <HStack
          space="xs"
          justifyContent="flex-start"
          width={'10%'}
          alignItems="center"
          pl={'$6'}
        >
          <ModalEdit title={title} id={id} />
          <ModalDelete title={title} id={id} />
        </HStack>
      )}
    </HStack>
  );
};
