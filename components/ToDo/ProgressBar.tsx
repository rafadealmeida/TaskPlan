import { HStack, Text, Progress } from '@gluestack-ui/themed';

interface IProgressBarProps {
  totalTasks: number;
  completedTasks: number;
}

export const ProgressBar = ({
  totalTasks,
  completedTasks,
}: IProgressBarProps) => {
  const getProgress = () => {
    if (totalTasks === 0) {
      return 0;
    }
    return (completedTasks / totalTasks) * 100;
  };

  return (
    <HStack my="$4" alignItems="center" w="$80">
      <Progress flex={1} value={getProgress()} bg="$backgroundDark700" h="$1">
        <Progress.FilledTrack bg="$primary600" h="$1" />
      </Progress>
      <Text color="$textDark400" ml="$2" fontWeight="$normal" fontSize="$xs">
        {totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed() : 0}%
      </Text>
    </HStack>
  );
};
