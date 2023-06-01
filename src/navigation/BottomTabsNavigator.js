import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/SignIn";
import Register from "../pages/Register";
import Manga from "../pages/Manga/Manga"
import { useSelector } from "react-redux";
const Tab = createBottomTabNavigator()

function BottomTabsNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
            {<Tab.Screen name='Register' component={Register} options={{ headerShown: false }} /> }
            <Tab.Screen name='Mangas' component={Manga} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}


export default BottomTabsNavigator