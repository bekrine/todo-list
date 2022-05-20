import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {v4 as uuid } from 'uuid';
import { StyleSheet, Text, View,FlatList,Alert } from 'react-native';
import Header from './components/Header';
import Listitems from './components/Listitems';
import AddItem from './components/AddItem';

export default function App() {
  const [items,setItem]=useState([
    {id:uuid(),text:'Milke'},
    {id:uuid(),text:'Eggs'},
    {id:uuid(),text:'Bread'},
    {id:uuid(),text:'juice'},
  ]) 
  const deleteItem=(id)=>{
    setItem(prevsvalues=>{
    return  prevsvalues.filter(item=>item.id != id)
    })
  }
  
  const addItem=(text)=>{
    if(!text){
      Alert.alert('Error','Please entre item',[{text:'OK'}])
    }else{
      setItem(prevsvalues=>[{id:uuid(),text},...prevsvalues])
    }
  }


  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList
      data={items}
      renderItem={({item})=><Listitems item={item} deleteItem={deleteItem}/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  paddingTop:60
  },
});
