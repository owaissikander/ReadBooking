import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Books from './src/screens/Books';
import Authours from './src/screens/Authours';
import Wishlists from './src/screens/Wishlists';
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

function AppNavigation() {


    return (
        <Tab.Navigator
            initialRouteName='Home'

            screenOptions={{
                tabBarStyle: {
                    height: 56,
                    backgroundColor: '#1c2127',
                    borderColor: '#1A2980',

                },

                tabBarActiveTintColor: '#FFFFFF', // Example active color
                tabBarInactiveTintColor: '#a3adb7', // Example inactive color
                tabBarShowLabel: true, // Whether to show labels below icons
            }} >
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,

                tabBarIcon: ({ color }) =>
                    <Octicons color={color} name='home' size={25} />


            }} />


            <Tab.Screen name="Books" component={Books} options={{
                headerShown: false,
                tabBarIcon: ({ color }) =>
                    <Feather color={color} name='book-open' size={25} />



            }} />


            <Tab.Screen name="Authors" component={Authours} options={{
                headerShown: false,
                tabBarIcon: ({ color }) =>
                    <Ionicons color={color} name='people-outline' size={25} />


            }} />


            <Tab.Screen name="Wishlists" component={Wishlists} options={{
                headerShown: false,
                tabBarIcon: ({ color }) =>
                    <MaterialIcons color={color} Icons name='save-alt' size={25} />


            }} />
        </Tab.Navigator>
    );
}

export default AppNavigation;