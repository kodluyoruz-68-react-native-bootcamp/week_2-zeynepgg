import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const TodoCard = ({todo, pressHandler}) =>{

    return(
        <TouchableOpacity 
        onLongPress={()=> pressHandler(todo.id)}
        style={styles.container}
        >
            <Text style={{color: 'black', fontWeight: 'bold'}}>{todo.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        margin: 10,
    },
});
export{TodoCard};