# Documentação do Aplicativo ToDo List usando React Native com Expo

## Introdução

Este documento descreve os passos necessários para configurar e desenvolver um
aplicativo de lista de tarefas (ToDo List) utilizando React Native com Expo. O
aplicativo será integrado com o Firebase para armazenamento de dados e
autenticação de usuário, e também incluirá funcionalidades de login com o
Google.

## Configuração Inicial

1. Crie um novo aplicativo Expo utilizando o comando:

```bash
npx create-expo-app my-app
```

2. Instale as dependências necessárias, incluindo Expo Dev Client e Firebase:

```bash
npx expo install expo-dev-client
npx expo install @react-native-firebase/app
```

3. Acesse o [Firebase Console](https://console.firebase.google.com/) e crie um
   novo projeto. Faça as configurações necessárias para Android e iOS e baixe os
   arquivos de configuração para ambos.

4. Cole os arquivos de configuração na pasta raiz do seu projeto e atualize o
   arquivo `app.json` para referenciar os arquivos de configuração corretamente.

5. Execute o comando `npx expo prebuild` no terminal para criar as pastas
   nativas tanto para Android quanto para iOS.

## Configuração de Login com Google

1. Para usar o login com o Google via Firebase, gere as chaves de assinatura SHA
   executando os seguintes comandos:

```bash
cd android
./gradlew signingReport
```

2. Copie as chaves de assinatura SHA geradas e atualize as configurações do
   Firebase.

3. Baixe os novos arquivos de configuração gerados pelo Firebase.

4. Instale a biblioteca para login social com o Google:

```bash
npx expo install @react-native-google-signin/google-signin
```

5. Execute novamente o comando `npx expo prebuild --clean` para atualizar as
   configurações.

## Instalação da Biblioteca de UI

1. Instale a biblioteca de UI Gluestack-UI:

```bash
npm i @gluestack-ui/themed @gluestack-style/react react-native-svg@13.4.0 @gluestack-ui/config@latest
```

2. No arquivo `_layout.tsx`, importe o provedor do Gluestack-UI e suas
   configurações:

```typescript
import { GluestackUIProvider} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
//outras importações

//.. resto do código

  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </GluestackUIProvider>
  );
```
