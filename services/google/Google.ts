import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { router } from 'expo-router';

GoogleSignin.configure({
  profileImageSize: 340,
  webClientId: process.env.EXPO_PUBLIC_CLIENT_ID,
  offlineAccess: true,
});

async function SigIn() {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const responseUser = await GoogleSignin.signIn();
    console.log(responseUser);

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
