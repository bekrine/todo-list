import { View,Text,StyleSheet,TouchableOpacity,TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export default function AddItem({addItem}){
    const [text,setText]=useState()

    const changetext=textValue=>setText(textValue)

    return(
        <View >
            <TextInput placeholder="Add item ...." style={styles.input} onChangeText={changetext}/>
            <TouchableOpacity style={styles.btn}
            onPress={()=>addItem(text)}>
                <Text style={styles.btntext}> <AntDesign name="plus" size={24} />
                Add Item</Text>
                
                </TouchableOpacity>  
        </View>
    );
} ;

const styles= StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16
    }
    ,
    btn:{
        backgroundColor:'#c2bad8',
        padding:9,
        margin:5
    },
    btntext:{
        color:'darkslateblue',
        fontSize:20,
        textAlign:'center'
    }
})