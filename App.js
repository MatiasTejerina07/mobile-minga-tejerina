import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler'
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';
//PAGES//
import Home from './src/pages/Home'
import Manga from './src/pages/Manga';
import Register from './src/pages/Register';
import Chapters from './src/pages/Chapters';

const Navbar = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator/>
      {/* <Navbar.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#FF5722',
          },
          drawerContentOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'gray'
          },
        }}>
        <Navbar.Screen name="Home" component={Home} />
        <Navbar.Screen name="Manga" component={Manga} />
        <Navbar.Screen name="Register" component={Register} />
        <Navbar.Screen name="Chapters" component={Chapters} />
      </Navbar.Navigator> */}
    </NavigationContainer>
  );
}
