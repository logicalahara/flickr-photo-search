import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from './src/utils/types';
import ImgSearch from './src/screens/ImgSearch';
import ImgDetail from './src/screens/ImgDetail';
import LoadingScreen from './src/screens/LoadingScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  // this state handles loading state when app launches
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);

  // componentDidMount
  useEffect(() => {
    let loadingTimer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);

    () => {
      return clearTimeout(loadingTimer);
    };
  }, []);

  // static loading cycle when app launches
  if (isAppLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator initialRouteName="imgSearch">
      <Stack.Screen
        name="imgSearch"
        component={ImgSearch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="imgDetail"
        component={ImgDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;
