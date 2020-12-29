import * as React from 'react';
import {View, Image, StyleSheet, ScrollView, Text} from 'react-native';

import Home from '../Screens/Home';
import Contact from '../Screens/Contact';
import Test from '../Screens/Test';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerItem} 
    from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    return(
        <ScrollView>
        
    
    
        <View style={styles.container}>
                    

            <View style={styles.drawerHeader}>
                <View>
                <Ionicons name="person" style={styles.fotoProfile} size={80} color="#900" />
                    <Text style={styles.drawerHeaderText}> Drawer Menu</Text>
                </View>
            </View>
                <DrawerItemList {...props} />
                <DrawerItem
    icon={()=> <Icon name="close" size={25} label="close" />}
    onPress={()=> props.navigation.closeDrawer()}
   
    label="Close"
    />
            <DrawerContentScrollView {...props}>
            </DrawerContentScrollView>
        </View>
        </ScrollView>
    )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator backBehavior="history" drawerContent={props => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen name="Contact" component={Contact}
            options={{ drawerLabel: 'Contact',
            drawerIcon: (({focused}) => <Ionicons name="person" size={20} color="#900" />)
            }}/>
            <Drawer.Screen name="Home" component={Home}
            options={{ drawerLabel: 'Home',
            drawerIcon: (({focused}) => <Icon name="home" size={20} color="#900" />)
            }}/>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 50,
        top: 10,

        

    },
    drawerHeader: {
        backgroundColor: '#03cafc',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    fotoProfile: {
        alignSelf: 'center',
        justifyContent: 'center',
    }
})
export default function DrawerNavigation() {
    return (
        <MyDrawer />
        )
}
