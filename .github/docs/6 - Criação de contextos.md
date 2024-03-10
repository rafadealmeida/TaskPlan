## Criação de contextos de

1. Criaremos os contexto de maneira desacoplada e posteriormente juntaremos em
   um contexto global da aplicação

2. Migraremos o método de observer de tasks para um contexto para as tasks, que
   criaremos, serem visíveis em toda a aplicação. Utilizamos uma função que nos
   retornar o contexto, para evitar de em todo lugar que precisarmos do contexto
   ter que importar o contexto e o hook do React, então criamos nosso próprio
   hook, para facilitar.

```typescript
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};
```

3. No contexto global colocaremos todos os contextos de maneira aninhada, do
   tema, de autenticação, tasks e safe area.

```typescript
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GluestackUIProvider colorMode="dark" config={config}>
      <AuthContextProvider>
        <TaskContextProvider>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </TaskContextProvider>
      </AuthContextProvider>
    </GluestackUIProvider>
  );
};

```

E no arquivo `_layout.tsx`, que engloba toda a aplicação, colocaremos nosso
contexto Global

```typescript
function RootLayoutNav() {
  return (
    <AppProvider>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: '#2F2F2F',
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="perfil" options={{ presentation: 'modal' }} />
      </Stack>
    </AppProvider>
  );
}


```

4. Deste modo conseguimos acessar as tarefas de qualquer página da aplicação, e
   mostrar todas as tarefas, ou apenas tarefas concluídas, e fazer calculo para
   mostrar uma barra de progresso, por exemplo
