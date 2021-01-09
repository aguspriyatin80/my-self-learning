import * as React from 'react';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function Home() {
    return (
        <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#c3cafc'
            }}
        >
            <Text 
                title='Go Back'
                onPress={()=> navigation.goBack()}
            >Home is here!</Text>

        </View>
    )
}
function Contact({navigation}) {
    return (
        <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#c203fc'
            }}
        >
            <Text 
                title='Go Back'
                onPress={()=> navigation.goBack()}
            >Contact is here!</Text>
            <Button title="Go Back" onPress={()=>navigation.goBack()} />
        </View>
    )
}


function About({navigation}) {
    return (
        <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#48d969'
            }}
        >
            <Text 
                title='Go Back'
                onPress={()=> navigation.goBack()}
            >About is here!</Text>
            <Button title="Go Back" onPress={()=>navigation.goBack()} />
        </View>
    )
}

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor:'#e91e63',
            }}
        >
        <Tab.Screen
            name='Home'
            component={Home}
        />
        <Tab.Screen
            name='Contact'
            component={Contact}
        />
        <Tab.Screen
            name='About'
            component={About}
        />

        </Tab.Navigator>
    )
}

export default function BottomTabNavigation() {
    return <MyTabs />
        
}