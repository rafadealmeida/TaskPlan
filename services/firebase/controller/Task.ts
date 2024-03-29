import auth from '@react-native-firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

const user = auth()?.currentUser;

const getTaskRef = (idTaks: string) => {
  const taskref = doc(db, 'Tasks', `${user?.uid}`, 'userTasks', `${idTaks}`);
  return taskref;
};

const add = async (name: string) => {
  const userTasksDocRef = doc(db, 'Tasks', `${user?.uid}`);

  const userTasksCollectionRef = collection(userTasksDocRef, 'userTasks');

  await setDoc(doc(userTasksCollectionRef), {
    name: name,
    complete: false,
    createdAt: serverTimestamp(),
  });
};

const edit = async (idTaks: string, newName: string) => {
  const taskref = getTaskRef(idTaks);
  try {
    await updateDoc(taskref, {
      name: newName,
    });
  } catch (error) {
    console.error('Erro ao obter tarefa:', error);
  }
};
const toggleStatus = async (idTaks: string, newStatus: boolean) => {
  const taskref = getTaskRef(idTaks);
  try {
    await updateDoc(taskref, {
      complete: newStatus,
    });
  } catch (error) {
    console.error('Erro ao obter tarefa:', error);
  }
};

const remove = async (idTaks: string) => {
  const taskref = getTaskRef(idTaks);
  try {
    await deleteDoc(taskref);
  } catch (error) {
    console.error('Erro ao obter tarefa:', error);
  }
};

const getAll = async () => {
  const listTask: any = [];
  const taskref = await getDocs(
    collection(db, 'Tasks', `${user?.uid}`, 'userTasks'),
  );
  taskref.forEach((doc) => {
    listTask.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return listTask;
};

export const Task = {
  add,
  edit,
  getAll,
  remove,
  toggleStatus,
};
