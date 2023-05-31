import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer"
import 'react-native-gesture-handler'
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';
import DrawbarNavigation from './src/navigation/Drawbar';
import { Provider } from 'react-redux';
import {store} from './src/store/store.js'
const Navbar = createDrawerNavigator()

export default function App() {
  
  return (

    <Provider store={store}>
      <NavigationContainer>
       {/*  <BottomTabsNavigator /> */}
        <DrawbarNavigation/>
      </NavigationContainer>
    </Provider>
  );
}
