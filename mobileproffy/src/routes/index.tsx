import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle:{ backgroundColor: '#9871f5' } }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="GiveClasses" component={GiveClasses} />
      <Stack.Screen name="Study" component={StudyTabs} />
    </Stack.Navigator>
  );
}

export default StackRoutes;