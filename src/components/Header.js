import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>TODO</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
    },
    header: {
        
        backgroundColor: '#34ace0',
        paddingTop: 38,
    },
    
});

export {Header};