import { NavigationContainer } from '@react-navigation/native';
import WelcomeLoader from './partoguidetofrmnSrc/partoguidecomponets/WelcomeLoader';
import { PartoContextProvider } from './partoguidetofrmnSrc/partoguidestore/partoguidecontext';
import { useEffect as partoUseEffect, useState as partoUseState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PartoDiaryOfMemoriesScreen from './partoguidetofrmnSrc/partoguidestackscreens/PartoDiaryOfMemoriesScreen';
import CreatePartoMemoryScreen from './partoguidetofrmnSrc/partoguidestackscreens/CreatePartoMemoryScreen';
import MemoryPartoCardDetails from './partoguidetofrmnSrc/partoguidestackscreens/MemoryPartoCardDetails';
import RecommendedPartoScreen from './partoguidetofrmnSrc/partoguidestackscreens/RecommendedPartoScreen';
import RecommendedPartoList from './partoguidetofrmnSrc/partoguidestackscreens/RecommendedPartoList';
import PartoPlacesCardDetails from './partoguidetofrmnSrc/partoguidestackscreens/PartoPlacesCardDetails';
import SavedPartoList from './partoguidetofrmnSrc/partoguidestackscreens/SavedPartoList';
import PartoMapScreen from './partoguidetofrmnSrc/partoguidestackscreens/PartoMapScreen';
import PartoMainScreen from './partoguidetofrmnSrc/partoguidestackscreens/PartoMainScreen';
import PartoEntryScreen from './partoguidetofrmnSrc/partoguidestackscreens/PartoEntryScreen';
const PartoGuideStackNv = createStackNavigator();

const App = () => {
  const [welcomePartoGuideLdrStt, setWelcomePartoGuideLdrStt] =
    partoUseState(false);

  partoUseEffect(() => {
    setTimeout(() => {
      setWelcomePartoGuideLdrStt(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <PartoContextProvider>
        {welcomePartoGuideLdrStt ? (
          <PartoGuideStackNv.Navigator screenOptions={{ headerShown: false }}>
            <PartoGuideStackNv.Screen
              name="PartoEntryScreen"
              component={PartoEntryScreen}
            />
            <PartoGuideStackNv.Screen
              name="PartoMainScreen"
              component={PartoMainScreen}
            />
            <PartoGuideStackNv.Screen
              name="PartoDiaryOfMemoriesScreen"
              component={PartoDiaryOfMemoriesScreen}
            />
            <PartoGuideStackNv.Screen
              name="CreatePartoMemoryScreen"
              component={CreatePartoMemoryScreen}
            />
            <PartoGuideStackNv.Screen
              name="MemoryPartoCardDetails"
              component={MemoryPartoCardDetails}
            />
            <PartoGuideStackNv.Screen
              name="RecommendedPartoScreen"
              component={RecommendedPartoScreen}
            />

            <PartoGuideStackNv.Screen
              name="RecommendedPartoList"
              component={RecommendedPartoList}
            />

            <PartoGuideStackNv.Screen
              name="PartoPlacesCardDetails"
              component={PartoPlacesCardDetails}
            />

            <PartoGuideStackNv.Screen
              name="SavedPartoList"
              component={SavedPartoList}
            />

            <PartoGuideStackNv.Screen
              name="PartoMapScreen"
              component={PartoMapScreen}
            />
          </PartoGuideStackNv.Navigator>
        ) : (
          <WelcomeLoader />
        )}
      </PartoContextProvider>
    </NavigationContainer>
  );
};

export default App;
