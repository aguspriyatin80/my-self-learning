import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import StackNavigation from './StackNavigation';
// import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomTabNavigation from './BottomTabNavigation'
function Home() {
    return(
        <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blue',
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: '#ffffff',
                    fontWeight: '800',
                }}
            > Home is here!</Text>            
        </View>
    )    
}

function Contact({navigation}) {
    return(
        <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: '#ffffff',
                    fontWeight: '800',
                }}
            > Contact is here!</Text>
            <Button 
                title='Go to About'
                onPress={()=> navigation.navigate('About')}
            />
        </View>
    )    
}

function About({navigation}) {
    return(
        <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#48d969',
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: '#ffffff',
                    fontWeight: '800',
                }}
            > About is here!</Text>
            <Button 
                title='Go to Home'
                onPress={()=> navigation.navigate('Home')}
            />
        </View>
    )    
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#e91e63",
                labelStyle: {fontSize: 12},
                style: {backgroundColor: 'white'}
            }}
        >
        <Tab.Screen 
            name="Home"
            component={Home} 
            options={{tabBarLabel: "Home"}}
        />
        <Tab.Screen 
            name="Contact"
            component={BottomTabNavigation}
            options={{tabBarLabel: "Contact"}}        
        />
        <Tab.Screen 
            name="About"
            component={About}      
            options={{tabBarLabel: "About"}}  
        />
        </Tab.Navigator>
    )
}

export default function TabBarNavigation() {
    return <NavigationContainer>
    <MyTabs />
    </NavigationContainer>
    
}