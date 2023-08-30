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
        <Card.Title style={styles.cardTitle}
          title={props.article.name} />
        <Card.Cover resizeMode='contain' source={props.article.url} />
        <Card.Content>
          <Text variant="bodyMedium">{props.article.description}</Text>
          <Text variant="bodyMedium">{props.article.price} €</Text>
          <Text variant="bodyMedium">Produits restants : {props.article.qte}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
          buttonColor="#a8c2ff"
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
  cardTitle: {
    fontWeight: "900"
  }
})

export default CardArticle;
