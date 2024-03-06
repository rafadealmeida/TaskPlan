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
