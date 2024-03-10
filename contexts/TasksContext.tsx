import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '@/services/firebase/firebaseConfig';

export const TaskContext = createContext<ToDoItem[] | []>([]);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};

export default function TaskContextProvider({
  children,
}: {
  children: JSX.Element;
}): React.JSX.Element {
  const [tasksList, setTaskList] = useState<ToDoItem[] | []>([]);
  const user = auth()?.currentUser;
  useEffect(() => {
    const userTasksCollectionRef = collection(
      doc(db, 'Tasks', `${user?.uid}`),
      'userTasks',
    );

    const unsubscribe = onSnapshot(
      query(userTasksCollectionRef, orderBy('createdAt')),
      (snapshot) => {
        const updatedTasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          complete: doc.data().complete,
          createdAt: doc.data().createdAt,
        }));
        setTaskList(updatedTasks);
      },
    );

    return () => unsubscribe();
  }, []);

  return (
    <TaskContext.Provider value={tasksList}>{children}</TaskContext.Provider>
  );
}
