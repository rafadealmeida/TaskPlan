import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { router } from 'expo-router';

GoogleSignin.configure({
  profileImageSize: 340,
  webClientId:
    '487766878338-6d746apge6c47g3orjno2jrla50r8eae.apps.googleusercontent.com',
  offlineAccess: true,
});

async function SigIn() {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const responseUser = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(
      responseUser.idToken,
    );
    setTimeout(() => {
      router.push('/(tabs)/');
    }, 300);

    setTimeout(() => {
      if (auth()?.currentUser !== null) {
        auth().currentUser?.updateProfile({
          displayName: responseUser.user.givenName,
          photoURL: responseUser.user.photo,
        });
      }
    }, 1000);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    throw error;
  }
}

async function Logout() {
  await GoogleSignin.signOut();
  auth().signOut();
}

export const Google = {
  SigIn,
  Logout,
};
