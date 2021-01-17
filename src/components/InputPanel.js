import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

function InputPanel({addTodo}){
    const [text, setText] = useState('');
    

    const changeHandler = (val) => {
        setText(val);
    };
   
    return(
        <View>
            <View style={styles.input}>
            <TextInput
            testID="input"
            onChangeText= {changeHandler}
            placeholder= 'Add To Do..'
            value = {text}
            />
        </View>
        <View style= {styles.button}>
            <TouchableOpacity
            testID="button"
            disabled={!text}
            onPress={() => addTodo(text)}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white', 
        margin: 10, 
        padding: 10, 
        borderRadius: 5
    },
    button: {
        backgroundColor: 'white', 
        margin: 10, 
        padding: 10, 
        borderRadius: 5, 
        alignItems: 'center'
    },
});

export{InputPanel};
