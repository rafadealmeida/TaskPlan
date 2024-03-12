import { TodoItem } from '../ToDo/TodoItem';

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

jest.mock('@gluestack-ui/themed');

describe('TodoItem component', () => {
  it('renders correctly', async () => {
    const { getByLabelText, getByText } = render(
      <TodoItem
        title="Test Todo"
        id="1"
        complete={false}
        createdAt={new Date()}
        editable={true}
      />,
    );

    // Verifica se os elementos importantes estão presentes
    expect(getByText('Test Todo')).toBeTruthy();
    expect(getByText('Marcar como concluída')).toBeTruthy(); // Texto alternativo para a label do Checkbox
    expect(getByText(/Marcar como concluída/)).toBeTruthy(); // Verifica se existe um elemento com esse texto
  });

  it('invokes editTask function when the checkbox is clicked', async () => {
    const mockEditTask = jest.fn();
    const { getByLabelText } = render(
      <TodoItem
        title="Test Todo"
        id="1"
        complete={false}
        createdAt={new Date()}
        editable={true}
      />,
    );

    // Simula um clique no checkbox
    fireEvent.press(
      getByLabelText('CheckBox para marcar se a tarefa está feita ou não'),
    );

    // Verifica se a função editTask foi chamada
    expect(mockEditTask).toHaveBeenCalled();
  });

  // Adicione mais testes conforme necessário para validar o comportamento e interações do componente.
});
