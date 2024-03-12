import { AddTask } from '@/components/ToDo/AddTask';
import { Page } from '@/components/Patterns/Page';
import { TodoItem } from '@/components/ToDo/TodoItem';
import { VStack, FlatList, Heading } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';
import { ListRenderItem } from 'react-native';
import { useTaskContext } from '@/contexts/TasksContext';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  const tasksList = useTaskContext();

  const Tasks: ListRenderItem<ToDoItem> = ({ item }) => {
    if (item.complete) {
      return (
        <TodoItem
          key={item.id}
          title={item.name}
          id={item.id}
          complete={item.complete}
          createdAt={item.createdAt}
          editable={false}
        />
      );
    } else return null;
  };
  return (
    <Page>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          title: 'Concluídas',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#171717',
            // @ts-ignore
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <VStack
        // mt={'10%'}
        width={'100%'}
        height={'100%'}
        space="md"
        alignItems="center"
        justifyContent="flex-start"
        mt="$10"
      >
        <Heading>Tarefas concluídas</Heading>
        {tasksList.length > 0 ? (
          <FlatList
            data={tasksList}
            // @ts-ignore
            renderItem={Tasks}
          />
        ) : (
          <Heading>Não há tasks concluídas por enquanto</Heading>
        )}
      </VStack>
    </Page>
  );
}
