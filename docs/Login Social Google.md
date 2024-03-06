## Configuração Inicial

1. Crie a função responsável pelo Login da Google :

```typescript
//resto do código
 await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const responseUser = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(
      responseUser.idToken,
    );
      //resto do código

  return auth().signInWithCredential(googleCredential);
```

2. Se o login social for bem sucedido, usamos o método auth do Firebase para
   atualizar o usuário atual, e redirecionamos o usuário a mpágina inicial do
   aplicativo

   ```typescript
      setTimeout(() => {
        router.push('/(tabs)/');
      }, 300);

      setTimeout(() => {
        if (auth()?.currentUser !== null) {
          auth().currentUser.updateProfile({
            displayName: responseUser.user.givenName,
            photoURL: responseUser.user.photo,
          });
        }
      }, 1000);
   ```

3. Crie a função responsável pelo Logout da Google :

   ```typescript
   async function Logout() {
   await GoogleSignin.signOut();
   auth().signOut();
   }
   ```

4. Criamos um contexto de usuário para atualizar o Avatar quando o usuário
   logar. Usamos o método onAuthStateChanged para chegar as modificações que
   pode ocorrer no usuário e atualizar o state, que será atualizado em toda a aplicação.

   ```typescript
   export const AuthContext = createContext<FirebaseAuthTypes.User | null>(null);

    export const useAuthContext = () => useContext(AuthContext);

    export default function AuthContextProvider({ children, }: { children:
    JSX.Element; }): React.JSX.Element { const [user, setUser] =
    useState<FirebaseAuthTypes.User | null>(null);
     function onAuthStateChanged(user: React.SetStateAction<FirebaseAuthTypes.User | null>) {
      setUser(user);
      }

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
      }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>; }
   ```
