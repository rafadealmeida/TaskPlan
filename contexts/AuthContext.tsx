import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const AuthContext = createContext<FirebaseAuthTypes.User | null>(null);

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({
  children,
}: {
  children: JSX.Element;
}): React.JSX.Element {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  console.log('UserState', user);

  function onAuthStateChanged(user: React.SetStateAction<FirebaseAuthTypes.User | null>) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
