import { useAuthContext } from '@/contexts/AuthContext';
import { Avatar, AvatarFallbackText, AvatarImage } from '@gluestack-ui/themed';

export const AvatarUser = ({
  size,
}: {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
}) => {
  const user = useAuthContext();
  return (
    <Avatar bgColor="$indigo600" size={size} marginRight={4}>
      {user?.photoURL && (
        <AvatarImage
          source={{
            uri: user?.photoURL,
          }}
          alt="Foto do usuário"
        />
      )}
      {!user?.photoURL && (
        <AvatarFallbackText>{user?.displayName}</AvatarFallbackText>
      )}
    </Avatar>
  );
};
