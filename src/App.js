import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {TodoCard, InputPanel, Header} from './components';
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const[textValue, setTextValue] =  useState("");

  const [todos, setTodos] = useState([
    {id: '0', text: 'yeni ödev', isDone: false},
    {id: '1', text: 'yeni ödev teslimi', isDone: false},
    {id: '2', text: 'yeni ödev tesliminin sonucu', isDone: false},

  ]);
  const addTodo = (text) => {
    setTodos((prevTodos) => {
        return [
          {id: Math.random().toString(),text: text, isDone: false},
          ...prevTodos
        ];
    });
  };

  function renderTodo({item}){
    console.log(item);
    return(
      <TodoCard todo={item} pressHandler={pressHandler}/>
    );
  }
  
  function pressHandler(id){
    setTodos((deleteTodos) => {
      return deleteTodos.filter(todo=> todo.id != id);
    })
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex:1, backgroundColor: '#d1ccc0'}}>
        <View style = {styles.headerContainer}>
          <Header />
        </View>

        <View style = {styles.listContainer}>
          <FlatList
            testID="list"
            data={todos}
            renderItem={renderTodo}
          />
        </View>
        <View style= {styles.panelContainer} >
          <InputPanel addTodo={addTodo}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'red',
  },
  listContainer: {
    flex: 5,
    backgroundColor: '#d1ccc0',
  },
  panelContainer: {
    flex:1,
    backgroundColor: '#227093',
    borderRadius: 10,
    justifyContent: 'flex-end'
  },
});
export default App;
