import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"

import Login from './app/pages/Login'

const Stack = createNativeStackNavigator();

function MessageStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

function RootNavigator(){
    return (
        <NavigationContainer>
            <MessageStack />
        </NavigationContainer>
    )
}

export default function App() {
    return <RootNavigator />
}