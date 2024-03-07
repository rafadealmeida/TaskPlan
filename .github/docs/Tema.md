## Configuração de Tema

Usando a ferrameta
[Figma](https://www.figma.com/file/HP3uv681gxsH2bpRZJKmkD/Task-Plan?type=design&node-id=0-1&mode=design&t=w3x4K8Wp9iTMqo3r-0),
para fazer protótipos com base nas referências que foram obitdas pelo
[Dribbble](https://dribbble.com/)

1. Estabelecendo o tema, usando o provider do gluestack, que fica no arquivo de
   \_layout.tsx, passando uma propriedade que é o color mode:

```typescript
   <GluestackUIProvider colorMode="dark" config={config}>
```

2.Criação de um componente base para as telas, para maior facilidade, seguindo o
cor de fundo para cada tema :

```typescript
export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
      <VStack
        alignItems="center"
        $dark-bg="$backgroundDark950"
        $light-bg="$backgroundLight100"
        h='$full'
      >
        {children}
      </VStack>
  );
```

3. A lib gluestack, já abstrai algumas coisas, relacionado ao tema, como a troca de cor dos texto, algo que facilita o desenvolvimento. Mas pontualmente poderão ocorrer ajustes em determinados contextos.
