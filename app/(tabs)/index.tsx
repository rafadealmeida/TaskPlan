import { AddTask } from '@/components/ToDo/AddTask';
import { Page } from '@/components/Patterns/Page';
import { TodoItem } from '@/components/ToDo/TodoItem';
import { VStack, Heading, FlatList } from '@gluestack-ui/themed';
import { Stack, useRouter } from 'expo-router';

export default function Home() {
  return (
    <Page>
      <Stack.Screen
        options={{
          title: 'Tarefas',
          // headerTintColor: '#FFF',
          // headerStyle: {
          //   backgroundColor: '#2F2F2F',
          // },
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
        <FlatList
          data={[
            1, 2, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ]}
          renderItem={({ item }) => <TodoItem title="Estudar Docker" />}
        />
      </VStack>
    </Page>
  );
}
