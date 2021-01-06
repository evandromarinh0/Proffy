import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import easelIcon from '../assets/images/icons/give-classes.png';
import heartIcon from '../assets/images/icons/heart-outline.png';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const Tabs = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
    <Tabs.Navigator 
      tabBarOptions={{
        style: { elevation: 0, shadowOpacity: 0, height: 64 },
        tabStyle: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
        iconStyle: { flex: 0, width: 20, height: 20 },
        labelStyle: { fontFamily: 'Archivo-Bold', fontSize: 13, marginLeft: 16 },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Tabs.Screen 
        options={{ tabBarLabel: 'Proffys', tabBarIcon: ({ focused }) => (
            <Image source={easelIcon}  style={{ width: 20, height: 20, tintColor: focused ? '#9871f5' : '#c1bccc', resizeMode: 'contain' }} />
          )
        }}
        name="TeacherList" 
        component={TeacherList}
      />
      <Tabs.Screen 
        options={{ tabBarLabel: 'Favoritos', tabBarIcon: ({ focused }) => (
          <Image source={heartIcon} style={{ width: 24, height: 24, tintColor: focused ? '#9871f5' : '#c1bccc', resizeMode: 'contain' }} />
        )
        }}
        name="Favorites" 
        component={Favorites}
      />
    </Tabs.Navigator>
  );
}

export default StudyTabs;