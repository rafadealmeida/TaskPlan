import {
  HStack,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  CheckboxLabel,
} from '@gluestack-ui/themed';
import { ModalEdit } from './ModalEdit';
import { ModalDelete } from './ModalDelete';
import { Task } from '@/services/firebase/controller/Task';
export const TodoItem = ({
  title,
  id,
  complete,
}: {
  title: string;
  id: string;
  complete: boolean;
}) => {
  const editTask = async () => {
    await Task.toggleStatus(id, !complete);
  };

  return (
    <HStack justifyContent="center" mr={'6%'}>
      <HStack width={'80%'} justifyContent="flex-start">
        <Checkbox
          value={`${complete}`}
          isChecked={complete}
          onChange={editTask}
          aria-label="CheckBox para marcar se a tarefa está feita ou não"
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
          <CheckboxLabel>{title}</CheckboxLabel>
        </Checkbox>
      </HStack>
      <HStack
        space="xs"
        justifyContent="center"
        width={'10%'}
        alignItems="center"
      >
        <ModalEdit title={title} id={id} />
        <ModalDelete title={title} id={id} />
        {/* <Button borderRadius="$full" size="lg" p="$3.5" bg="$" width={5}>
          <ButtonIcon as={EditIcon} />
        </Button> */}
        {/* <Button borderRadius="$full" size="lg" p="$3.5" bg="$" width={5}>
          <ButtonIcon as={TrashIcon} color="$red700" />
        </Button> */}
      </HStack>
    </HStack>
  );
};
