import AuthContextProvider from './AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TaskContextProvider from './TasksContext';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GluestackUIProvider colorMode="dark" config={config}>
      <AuthContextProvider>
        <TaskContextProvider>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </TaskContextProvider>
      </AuthContextProvider>
    </GluestackUIProvider>
  );
};
