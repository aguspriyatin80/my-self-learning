import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

export default function Contact({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Contact is here</Text>
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c203fc'
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    }
})