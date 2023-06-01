import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerToggleButton, createDrawerNavigator } from "@react-navigation/drawer"
import { View, Image, Text, StyleSheet } from 'react-native';
import SignIn from '../pages/SignIn';
import Manga from '../pages/Manga/Manga';
import Register from '../pages/Register';
import Chapters from '../pages/Chapters'
import Home from '../pages/Home';
const Drawer = createDrawerNavigator()
import { useSelector } from 'react-redux'
import ButtomCustom from '../components/Auth/ButtomCustom'
import Perfil from '../components/Auth/ButtomPerfil'
import MangaDetails from '../pages/Manga/MangaDetails';





function DrawerNavigation() {

    const token = useSelector(store => store.user.token)
    return (
        <Drawer.Navigator drawerContent={props => <Homee {...props} />} screenOptions={{ drawerStyle: { backgroundColor: 'white' }, drawerContentOptions: { activeTintColor: 'white', inactiveTintColor: 'gray' }, }}>
            {!token && <Drawer.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />}
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
            {token === null ? null : <Drawer.Screen name="Manga" component={Manga} options={{ headerShown: false }} />}
            <Drawer.Screen name="Register" component={Register} options={{ headerShown: false, drawerItemStyle: { display: 'none' } }} />
            {token === null ? null : <Drawer.Screen name="Chapters" component={Chapters} options={{ headerShown: false }} />}
            <Drawer.Screen name="MangaDetails" component={MangaDetails} options={{ headerShown: false, drawerItemStyle: { display: 'none' } }} />
        </Drawer.Navigator>

    )
}
export default DrawerNavigation

const Homee = ({ navigation }) => {
    const token = useSelector(store => store?.user?.token)
    return (
        <DrawerContentScrollView style={styles.container}>
            <Perfil/>
            <Text style={styles.title} >Menu</Text>

            {!token && <ButtomCustom title='SignIn' onPress={() => navigation.navigate('SignIn')} />}
            {token === null ? null : <ButtomCustom title='Home' onPress={() => navigation.navigate('Home')} />}
            <ButtomCustom title='Register' onPress={() => navigation.navigate('Register')} />
            {token === null ? null : <Drawer.Screen name="Manga" component={Manga} options={{ headerShown: false }} />}
            {token === null ? null :<ButtomCustom title='Chapters' onPress={() => navigation.navigate('Chapters')} />}
            {token  ? <ButtomCustom title='Logout' onPress={() => navigation.navigate()} />: null}
        </DrawerContentScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})







