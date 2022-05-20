import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Listitems({item , deleteItem}){
    return(
        <TouchableOpacity style={styles.Listitems}>
        <View style={styles.Listitemsview}>
            <Text style={styles.Listitemstext}>{item.text}</Text>
            <FontAwesome onPress={()=>deleteItem(item.id)} name="remove" size={24} color="firebrick" />
        </View>
        </TouchableOpacity>
    );
} ;

const styles= StyleSheet.create({
    Listitems:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    Listitemsview:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
    ,
    Listitemstext:{
    
        fontSize:18,
        
    }
})