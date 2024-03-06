import { Google } from './../services/google/Google';
import {
  VStack,
  Button,
  Heading,
  ButtonText,
  Text,
  Image,
} from '@gluestack-ui/themed';
import { GoogleLogo } from '@/utils/GoogleLogo';
import { Stack } from 'expo-router';
// @ts-ignore
import imageBanner from '../assets/images/banner.jpg';
// @ts-ignore
import bannermobile from '../assets/images/bannermobile.jpg';

export default function SignIn() {
  return (
    <VStack alignItems="center" bgColor="$white" h={'100%'}>
      {/* <VStack alignItems="center" width="50%" height="50%" mt={10}>
        <Image
          source={imageBanner}
          alt="Alternate Text"
          size="full"
          resizeMode="contain"
          // borderRadius={100}
        />
      </VStack> */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <VStack
        mt={'50%'}
        width={'90%'}
        height={'50%'}
        space="md"
        zIndex={10}
        alignItems="center"
        justifyContent={'center'}
        // bgColor={'$lightBlue300'}
        // borderTopLeftRadius={100}
      >
        <Image
          source={bannermobile}
          alt="Alternate Text"
          size="full"
          borderRadius={10}
        />
        <Heading textAlign="center" size="2xl">
          TaskPlan
        </Heading>
        <Heading textAlign="center">
          Planeje Seus Sonhos, Conquiste Suas Metas.
        </Heading>
        {/* <Text>Planeje Seus Sonhos, Conquiste Suas Metas.</Text> */}
        <Text textAlign="center">
          Transformando sonhos em metas tangíveis, e metas em realidade, uma
          tarefa de cada vez.
        </Text>
        <Button
          variant="solid"
          bg={'$blue400'}
          borderRadius="$md"
          onPress={Google.SigIn}
          hardShadow="5"
          mt={40}
        >
          <GoogleLogo />
          <ButtonText ml={4} color="$white">
            Fazer login com o Google
          </ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
}
