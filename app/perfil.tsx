import { ButtonText, Heading, Button, VStack } from '@gluestack-ui/themed';
import { Stack, router } from 'expo-router';
import { AvatarUser } from '@/components/AvatarUser';
import auth from '@react-native-firebase/auth';
import { Google } from '@/services/google/Google';
import { Page } from '@/components/Patterns/Page';
import { ProgressBar } from '@/components/ToDo/ProgressBar';
import { useTaskContext } from '@/contexts/TasksContext';

export default function Perfil() {
  const user = auth().currentUser;
  const tasksList = useTaskContext();
  const completeTask = tasksList.filter(
    (task) => task.complete === true,
  ).length;

  return (
    <Page>
      <VStack
        alignItems="center"
        justifyContent="center"
        w={'100%'}
        h={'100%'}
        space="3xl"

        // mt={10}
      >
        <Stack.Screen
          options={{
            title: 'Perfil',
            // headerTintColor:'#FFF',
            // headerStyle:{
            //   backgroundColor:'#2F2F2F'
            // }
          }}
        />
        <VStack
          alignItems="center"
          backgroundColor="$backgroundDark800"
          p={'$5'}
          borderRadius={'$md'}
        >
          <VStack alignItems="center">
            <AvatarUser size={'xl'} />
            <Heading>{user?.displayName}</Heading>
            <Heading size="md">Total de tarefas realizadas</Heading>
            <ProgressBar
              totalTasks={tasksList.length}
              completedTasks={completeTask}
            />
          </VStack>
          <Button
            size="sm"
            onPress={() => {
              Google.Logout();
              router.replace('/');
            }}
          >
            <ButtonText>Sair da conta</ButtonText>
          </Button>
        </VStack>

        {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
      </VStack>
    </Page>
  );
}
