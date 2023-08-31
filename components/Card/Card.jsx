import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { BoutiqueContext } from '../../BoutiqueContext';

function CardArticle(props) {
  const boutiqueContext = useContext(BoutiqueContext);
  let isActive = boutiqueContext.articles[props.article.id].qte === 0 ? true : false
  return (
    <View style={styles.card}>
      <Card style={styles.innerCard}>
        <Card.Title
          title={props.article.name} />
        <Card.Cover resizeMode='contain' source={props.article.url} />
        <Card.Content>
          <Text variant="bodyMedium">{props.article.description}</Text>
          <Text variant="bodyMedium" style={{textAlign:"center",fontWeight:"900"}}>{props.article.price} €</Text>
          <Text variant="bodyMedium" style={{textAlign:"right"}}>Produits restants : {props.article.qte}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
          textColor='#fff'
          buttonColor="#ff7369"
          disabled={isActive}
          onPress={() => {
            boutiqueContext.decrementQte(props.article.id);
          }}>Achat</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    margin: 20,
  },
  innerCard: {
    position: "relative",
    zIndex: -1
  },

})

export default CardArticle;
