import { NavigationContainer } from '@react-navigation/native';
import WelcomeLoader from './src/components/WelcomeLoader';
import { PartoContextProvider } from './src/store/context';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PartoDiaryOfMemoriesScreen from './src/screens/PartoDiaryOfMemoriesScreen';
import CreatePartoMemoryScreen from './src/screens/CreatePartoMemoryScreen';
import MemoryPartoCardDetails from './src/screens/MemoryPartoCardDetails';
import RecommendedPartoScreen from './src/screens/RecommendedPartoScreen';
import RecommendedPartoList from './src/screens/RecommendedPartoList';
import PartoPlacesCardDetails from './src/screens/PartoPlacesCardDetails';
import SavedPartoList from './src/screens/SavedPartoList';
import PartoMapScreen from './src/screens/PartoMapScreen';
import PartoMainScreen from './src/screens/PartoMainScreen';
import EntryScreen from './src/screens/EntryScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <PartoContextProvider>
        {isLoading ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="EntryScreen" component={EntryScreen} />
            <Stack.Screen name="PartoMainScreen" component={PartoMainScreen} />
            <Stack.Screen
              name="PartoDiaryOfMemoriesScreen"
              component={PartoDiaryOfMemoriesScreen}
            />
            <Stack.Screen
              name="CreatePartoMemoryScreen"
              component={CreatePartoMemoryScreen}
            />
            <Stack.Screen
              name="MemoryPartoCardDetails"
              component={MemoryPartoCardDetails}
            />
            <Stack.Screen
              name="RecommendedPartoScreen"
              component={RecommendedPartoScreen}
            />

            <Stack.Screen
              name="RecommendedPartoList"
              component={RecommendedPartoList}
            />

            <Stack.Screen
              name="PartoPlacesCardDetails"
              component={PartoPlacesCardDetails}
            />

            <Stack.Screen name="SavedPartoList" component={SavedPartoList} />

            <Stack.Screen name="PartoMapScreen" component={PartoMapScreen} />
          </Stack.Navigator>
        ) : (
          <WelcomeLoader />
        )}
      </PartoContextProvider>
    </NavigationContainer>
  );
};

export default App;
