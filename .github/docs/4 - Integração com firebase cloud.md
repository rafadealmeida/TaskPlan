## Configuração do Firestore Database

1. Primeiramente precisamos criar o data base no
   [Firebase](https://console.firebase.google.com/)

2. O Firestore Database e constituído de coleções e documentos, podendo haver
   subcoleções. E essa foi uma dificuldade que enfrentei , pode decidir seguir a
   estrutura de:

- Coleção -> Tasks
- Documento -> id do usuário
- Coleção -> userstasks
- Documento -> individual para cada task

EX:`Tasks/:idUser/usertasks/:idTask`

E esta é uma maneira que nunca tinha trabalhado, então não tinha experiência com
esta abordagem. Procurei documentação, porém não é algo centralizado possuindo
algumas documentações referentes ao Firebase.Outra dificuldade foi tutoriais ,
pois estava utilizando o firebase de uma maneira diferente da que estava
implementar, e a [documentação que costumo](https://rnfirebase.io/) usar não
estava de acordo com minha abordagem e minha dependências. Depois achei uma
[documentação](https://cloud.google.com/firestore/docs?hl=pt-br) que estava de
acordo com minha abordagem. Perdi alguns tempo tentando utilizar métodos de
documentações ou tutoriais divergentes. Outra ferramenta que utilizei foi o
chatGPT , elucidou algumas questões apesar de algumas respostas incorretas.

3. Instalaremos a dependências e criaremos arquivo de configuração para
   inicializar a conexão com o firebase.

```npm
npm install firebase
```

```typescript
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';

    const firebaseConfig = {
      apiKey: process.env.EXPO_PUBLIC_API_KEY,
      authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
      storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.EXPO_PUBLIC_APP_ID,
    };

    // Inicia o Firebase
    const app = initializeApp(firebaseConfig);
    // Inicia o database
    export const db = getFirestore(app);
```

4. Depois criamos os métodos que serão responsáveis pelo CRUD. O importante
   ressaltar aqui é como usar os método do firebase doc, devido a estar usando
   um documento dentro de uma coleção dentro de documento, que está dentro de
   coleção. `Tasks/:idUser/usertasks/:idTask`

##### Criamos uma função para criar essa referência.

```typescript
  const getTaskRef = (idTaks: string) => {
    const taskref = doc(db, 'Tasks', `${user?.uid}`, 'userTasks', `${idTaks}`);
    return taskref;
  };
```

##### Observações:

    * doc(): Este método cria uma referência a um documento específico no Firestore.
    * collection(): Este método cria uma referência a uma coleção específica no Firestore.
    * getDoc(): Este método recupera um único documento do Firestore.
    * setDoc(): Este método define um documento no Firestore.
    * getDocs(): Este método recupera todos os documentos de uma coleção no Firestore.
    * deleteDoc(): Este método exclui um documento do Firestore.
    * updateDoc(): Este método atualiza um documento existente no Firestore.
    * db: Este é um objeto exportado de firebaseConfig que contém uma instância do Firestore, permitindo o acesso ao banco de dados Firestore em outras partes do código.

5. Resumo das Funções do Serviço de Tarefas:

Função _add_(name: string)

Esta função adiciona uma nova tarefa para o usuário atual. Ela usa setDoc para
definir um novo documento na coleção userTasks dentro do documento do usuário.

Função _edit_(idTask: string, newName: string)

Esta função edita o nome de uma tarefa existente. Ela usa updateDoc para
atualizar o documento da tarefa específica com um novo nome.

Função _toggleStatus_(idTask: string, newStatus: boolean)

Esta função altera o status de uma tarefa entre completo e incompleto. Ela usa
updateDoc para atualizar o documento da tarefa específica com o novo status.

Função _remove_(idTask: string)

Esta função remove uma tarefa existente. Ela usa deleteDoc para excluir o
documento da tarefa específica.

Função _getAll_()

Esta função obtém todas as tarefas do usuário atual. Ela usa getDocs para obter
uma coleção de documentos na coleção userTasks dentro do documento do usuário.

6. Criar observer para as atualizações de Tasks:

```typescript
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
```

Comportamento:

    1.Cria uma referência à coleção de tarefas do usuário no Firestore.
    2.Registra um observador para receber notificações sobre alterações na coleção de tarefas do usuário.
    3.Mapeia os documentos da coleção para um array de tarefas atualizadas.
    4.Atualiza o estado da lista de tarefas com as tarefas atualizadas.
    5.Retorna uma função de limpeza para cancelar a inscrição do observador quando o componente é desmontado.

7. Posteriormente adicionamos os métodos nos componentes responsáveis, por cada
   ação.
