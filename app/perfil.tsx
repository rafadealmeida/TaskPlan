import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { ButtonText, Heading, Button, VStack } from '@gluestack-ui/themed';
import { Stack, router } from 'expo-router';
import { AvatarUser } from '@/components/AvatarUser';
import auth from '@react-native-firebase/auth';
import { Google } from '@/services/google/Google';

export default function Perfil() {
  const user = auth().currentUser;
  return (
    <VStack
      alignItems="center"
      w={'100%'}
      space='3xl'
      mt={10}
    >
      <Stack.Screen
        options={{
          title: 'Perfil',
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

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </VStack>
  );
}
