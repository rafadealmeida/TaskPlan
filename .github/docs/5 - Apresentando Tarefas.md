## Apresentação de tarefas

1. Na página principal do aplicativos apresentaremos um input com um botão de
   adicionar , para adicionar novas tarefas. Usaremos uma FlatList para
   apresentar os cards de cada taerfa.

2. Neste cards , terá um checkboc para marcar se a tarefa está concluida ou não,
   nome da tarefa, data de criação, e mais 2 botões, um para edição do nome da
   tarefa e outro para deletar a tarefa.

3. Este dois botões abriram modais, o de edição com um input para a troca de
   nome da tarefa, e a modal para exclusão, mostrará uma pergunta para a
   confirmação do exclusão da tarefa.

4. Podemos usar o mesmo componente de ToDoItem, para a primeira página, que
   exibe todas as tarefas, e para a segunda página, que apresenta apenas as
   tarefas concluídas, porém há uma prop que devemos passar `editable` que é um
   booleano. Esta prop será responsável por definir se o ToDoItem terá opções de
   editção e exclusão visíveis ou troca de status ativa. Pois na seguda tela,
   não haverá interação do usuário, ela é apenas para leitura.O valor do
   `editable` verdadeiro quer dizer que o card da tarefa permite interação.

5. A apresentação das tarefas estão ordenadas por ordem de criação. Esta
   ordenação é realizada pelo método query do firebase. No qual passamos a
   referência dos dados e por qual campo ordenaremos.

```typescript
 const userTasksCollectionRef = collection(
      doc(db, 'Tasks', `${user?.uid}`),
      'userTasks',
    );
  query(userTasksCollectionRef, orderBy('createdAt'))
```

6. Na página de perfil apresentaremos uma barra de progresso onde apresentará po
   usuário a porcentagem das tarefas concluídas. Neste componente recebemos 2
   props, o número de tarefas total e o número de tarefas feitas.

> Observação: Ao adicionar métodos de edição e exclusão deve-se atentar que este
> métodos são assíncronos, devemos esperar sua execução para fechar as modais,
> para evitar possíveis erros.
