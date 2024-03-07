import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { ButtonText, Heading, Button, VStack } from '@gluestack-ui/themed';
import { Stack, router } from 'expo-router';
import { AvatarUser } from '@/components/AvatarUser';
import auth from '@react-native-firebase/auth';
import { Google } from '@/services/google/Google';
import { Page } from '@/components/Patterns/Page';

export default function Perfil() {
  const user = auth().currentUser;
  return (
    <Page>
      <VStack
        alignItems="center"
        justifyContent='center'
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
        <VStack alignItems="center">
          <AvatarUser size={'xl'} />
          <Heading>{user?.displayName}</Heading>
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

        {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
      </VStack>
    </Page>
  );
}
