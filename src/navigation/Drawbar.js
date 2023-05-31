import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer"
import SignIn from '../pages/SignIn';
import Manga from '../pages/Manga';
import Register from '../pages/Register';
import Chapters from '../pages/Chapters'
import Home from '../pages/Home';
const Navbar = createDrawerNavigator()


function DrawbarNavigation() {
    
    return (
        <Navbar.Navigator screenOptions={{ drawerStyle: { backgroundColor: '#FF5722', }, drawerContentOptions: { activeTintColor: 'white', inactiveTintColor: 'gray' }, }}>
            <Navbar.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Navbar.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Navbar.Screen name="Manga" component={Manga} options={{ headerShown: false }} />
            <Navbar.Screen name="Register" component={Register} options={{ headerShown: false, drawerItemStyle: { display: 'none' } }} />
            <Navbar.Screen name="Chapters" component={Chapters} options={{ headerShown: false }} />
        </Navbar.Navigator>

    )
}
export default DrawbarNavigation







