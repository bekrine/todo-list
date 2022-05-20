import { View,Text,StyleSheet } from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.text}>Shooping list</Text>
        </View>
    );
} ;

const styles= StyleSheet.create({
    header:{
        height:60,
        padding:15,
        backgroundColor:'blue'
    }
    ,
    text:{
        color:'#fff',
        fontSize:23,
        textAlign:'center'
    }
})