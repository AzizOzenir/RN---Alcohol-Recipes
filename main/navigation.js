import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/Home";

import DetailsPage from "./pages/Details";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" options={{presentation: 'fullScreenModal'}} component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;