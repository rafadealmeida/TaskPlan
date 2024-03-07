import { StyleSheet } from 'react-native';

import { Text, View } from '@gluestack-ui/themed';
import { Page } from '@/components/Patterns/Page';

export default function TabTwoScreen() {
  return (
    <Page>
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
        <View style={styles.separator} />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
