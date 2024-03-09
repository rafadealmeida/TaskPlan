import { AddTask } from '@/components/ToDo/AddTask';
import { Page } from '@/components/Patterns/Page';
import { TodoItem } from '@/components/ToDo/TodoItem';
import { VStack, FlatList } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { ListRenderItem, ListRenderItemInfo } from 'react-native';
import { Task } from '@/services/firebase/controller/Task';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/services/firebase/firebaseConfig';
import auth from '@react-native-firebase/auth';

export default function Home() {
  const [tasksList, setTaskList] = useState<ToDoItem[] | []>([]);

  const user = auth()?.currentUser;
  useEffect(() => {
    const userTasksCollectionRef = collection(
      doc(db, 'Tasks', `${user?.uid}`),
      'userTasks',
    );

    const unsubscribe = onSnapshot(userTasksCollectionRef, (snapshot) => {
      const updatedTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        complete: doc.data().complete,
      }));
      setTaskList(updatedTasks);
    });

    return () => unsubscribe();
  }, []);

  const Tasks: ListRenderItem<ToDoItem> = ({ item }) => {
    return (
      <TodoItem
        key={item.id}
        title={item.name}
        id={item.id}
        complete={item.complete}
      />
    );
  };
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
        {tasksList.length > 0 && (
          <FlatList
            data={tasksList}
            // @ts-ignore
            renderItem={Tasks}
          />
        )}
      </VStack>
    </Page>
  );
}
