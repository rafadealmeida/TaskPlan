import { Alert, AlertIcon, AlertText, InfoIcon } from '@gluestack-ui/themed';

export const AlertToast = (isEmpty: boolean) => {
  return (
    <Alert mx="$2.5" action={isEmpty ? 'success' : 'error'} variant="solid">
      <AlertIcon as={InfoIcon} mr="$3" />
      <AlertText>
        {isEmpty
          ? 'Tarefa criada com sucesso'
          : ' Não pode criar tarefa sem nome'}
      </AlertText>
    </Alert>
  );
};
