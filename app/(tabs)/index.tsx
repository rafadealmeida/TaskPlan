import { AddTask } from '@/components/ToDo/AddTask';
import { Page } from '@/components/Patterns/Page';
import { TodoItem } from '@/components/ToDo/TodoItem';
import { VStack, FlatList, Heading } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';
import { ListRenderItem } from 'react-native';
import { useTaskContext } from '@/contexts/TasksContext';
import { StatusBar } from 'expo-status-bar';
import { Spinner } from '@gluestack-ui/themed';
import { Suspense } from 'react';

export default function Home() {
  const tasksList = useTaskContext();

  const Tasks: ListRenderItem<ToDoItem> = ({ item }) => {
    return (
      <TodoItem
        key={item.id}
        title={item.name}
        id={item.id}
        complete={item.complete}
        createdAt={item.createdAt}
        editable={true}
      />
    );
  };
  return (
    <Page>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          title: 'Tarefas',
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
        <AddTask />

        {tasksList.length > 0 ? (
          <Suspense fallback={<Spinner size="large" />}>
            <FlatList
              data={tasksList}
              // @ts-ignore
              renderItem={Tasks}
            />
          </Suspense>
        ) : (
          <Heading>Não há tasks por enquanto</Heading>
        )}
      </VStack>
    </Page>
  );
}
