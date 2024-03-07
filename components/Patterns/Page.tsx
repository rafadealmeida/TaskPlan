import { VStack } from '@gluestack-ui/themed';

export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
      <VStack
        alignItems="center"
        $dark-bg="$backgroundDark950"
        $light-bg="$backgroundLight100"
        h='$full'
        // mt={-25}
      >
        {children}
      </VStack>
  );
};
