import { Page } from '@/components/Patterns/Page';
import { Google } from '@/services/google/Google';
import { VStack, Heading, Button, ButtonText } from '@gluestack-ui/themed';
import { Stack, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
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
        justifyContent={'center'}
      >
        <Heading pb={10}>Home</Heading>
      </VStack>
    </Page>
  );
}
