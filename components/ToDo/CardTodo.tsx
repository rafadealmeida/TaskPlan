import { Card, Heading, Text } from '@gluestack-ui/themed';
import { FieldValue } from 'firebase/firestore';
import React from 'react';

export const CardTodo = ({
  children,
  date,
}: {
  children: React.ReactNode;
  date: any;
}) => {
  return (
    <Card size="lg" width={'$80'} variant="elevated" m="$2">
      <Heading
        mb="$1"
        size="md"
        width="100%"
        // bgColor="red"
      >
        {children}
      </Heading>
      <Text size="sm">{date}</Text>
    </Card>
  );
};
