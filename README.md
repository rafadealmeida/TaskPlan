# TaskPlan

TaskPlan é um aplicativo de lista de tarefas (ToDo List) desenvolvido em React
Native com Expo, projetado para ajudá-lo a organizar suas tarefas diárias,
transformar seus sonhos em metas alcançáveis e acompanhar seu progresso.

## Funcionalidades

- Adicionar, editar e excluir tarefas.
- Acompanhar seu progresso.
- Login com Google para sincronizar tarefas entre dispositivos.
- Interface intuitiva e fácil de usar.

# Ferramentas Necessárias

Este documento descreve as ferramentas necessárias para configurar o ambiente de
desenvolvimento e executar o projeto TaskPlan.

## 1. Node.js e npm

- **Descrição**: O Node.js é um ambiente de execução JavaScript que permite
  executar código JavaScript no lado do servidor. O npm é o gerenciador de
  pacotes do Node.js, usado para instalar e gerenciar dependências de projetos.

- **Instalação**:
  - Para instalar o Node.js, faça o download do instalador no
    [site oficial](https://nodejs.org/) e siga as instruções de instalação.
  - O npm é instalado automaticamente junto com o Node.js.

## 2. Expo CLI

- **Descrição**: O Expo CLI é uma ferramenta de linha de comando usada para
  criar, gerenciar e executar projetos Expo.

- **Instalação**:
  - Para instalar o Expo CLI globalmente, execute o seguinte comando no
    terminal:
    ```
    npm install -g expo-cli
    ```

## 3. Visual Studio Code (ou qualquer outra IDE de sua preferência)

- **Descrição**: Uma IDE ou editor de texto é necessário para escrever e editar
  o código-fonte do projeto. O Visual Studio Code é uma opção popular para o
  desenvolvimento React Native devido às suas extensões e recursos integrados
  para JavaScript e React.

- **Instalação**:
  - Baixe o Visual Studio Code no [site oficial](https://code.visualstudio.com/)
    e siga as instruções de instalação.

---

Certifique-se de ter todas essas ferramentas instaladas e configuradas
corretamente antes de iniciar o desenvolvimento do projeto TaskPlan.

## Instalação

Para começar, clone o repositório:

```bash
  git clone https://github.com/rafadealmeida/TaskPlan.git
```

Em seguida, instale as dependências do projeto:

```bash
  cd TaskPlan
  npm install

```

> Lembrando que projeto reais não versionamos arquivos de configuração como .env
> ou no caso do firebase os arquivos : `google-services.json` e
> `GoogleService-Info.plist`. Mas neste projeto versionarei estes documentos
> para facilitar a execução do projeto.

Após a instalação das dependências, você precisa criar os códigos nativos.
Executamos o comando a seguir, para gerar as pastas de android e ios.

```bash
  npx expo prebuild --clean
```

#### _Lembrando que a pasta ios só pode ser gerada em sistema MacOs ou Linux. Para windows pode-se usar o [WSL 2](https://learn.microsoft.com/pt-br/windows/wsl/install) (Windows Subsystem for Linux 2) e executar o comando via terminal_

> Caso a pasta ios não tenha gerado com o comando acima, execute :
> `npx expo prebuild --platform ios`

Após as pastas geradas podemos prosseguir e buildar o projeto para o sistema
desejado :

- Android : `npx expo run:android`
- IOS : `npx expo run:ios`

## Tecnologias Utilizadas

- React Native
- Expo
- Firebase (para autenticação e armazenamento de dados)
- React Navigation
- Gluestack-UI (biblioteca de UI)

## Documento adicionas

A documentação dos processo de desenvolvimento está no projeto dentro da pasta
`.github/docs`
