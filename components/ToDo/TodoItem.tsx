import {
  HStack,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  CheckboxLabel,
  Button,
  ButtonIcon,
  EditIcon,
  TrashIcon,
} from '@gluestack-ui/themed';
import { ModalEdit } from './ModalEdit';
import { ModalDelete } from './ModalDelete';
export const TodoItem = ({ title }: { title: string }) => {
  return (
    <HStack justifyContent="center" mr={'6%'}>
      <HStack width={'80%'} justifyContent="flex-start">
        <Checkbox
          value={'done'}
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
        <ModalEdit title={title} />
        <ModalDelete title={title} />
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
