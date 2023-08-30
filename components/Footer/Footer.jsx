import {View,Text,StyleSheet} from 'react-native';

function Footer(){
    return(
        <View style={styles.footer}>
            <Text>Proudly powered by</Text>
            <Text>CEPPIC DWWM Arques la Bataille 2023 ©</Text>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        footer:{
            height:150,
            backgroundColor:"#f0f0f0",
            justifyContent:"center",
            alignItems:"center"
        }
    }
)
export {Footer}