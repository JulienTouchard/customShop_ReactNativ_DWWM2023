import Card from "../Card/Card";
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    boutique:{

    }
})
function Boutique(props){

    return(
        <View style={styles.boutique}>
            {
                props.articles.map((value,index)=>{
                    return(
                        <Card
                        article={value}
                        key={index}
                        ></Card>
                    )
                })
            }
            

        </View>
    )
}

export default Boutique;