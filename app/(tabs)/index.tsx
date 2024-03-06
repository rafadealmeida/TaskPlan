import { Google } from '@/services/google/Google';
import { VStack, Heading, Button, ButtonText } from '@gluestack-ui/themed';
import { Stack, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  return (
    <VStack alignItems="center">
      <Stack.Screen
        options={{
        title:'Tarefas'
        }}
      />
      <VStack
        mt={'10%'}
        width={'100%'}
        height={'90%'}
        pb={'75%'}
        space="md"
        alignItems="center"
        justifyContent={'center'}
        bgColor={'primary.50'}
        borderTopLeftRadius={100}
      >
        <Heading pb={10}>Home</Heading>
      </VStack>
    </VStack>
  );
}
