import { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native"
import { Button } from "react-native-paper"
import { BoutiqueContext } from "../../BoutiqueContext";
import { MenuContext } from "../../MenuContext";

const Panier = () => {
    const boutiqueContext = useContext(BoutiqueContext);
    const menuContext = useContext(MenuContext);
    const paniertmp = [];
    if (boutiqueContext.tabPanier.length > 0) {
        const tabPanier = boutiqueContext.tabPanier.sort();
        let i = 0;
        tabPanier.map((valeur, index) => {
            i++;
            if (valeur !== tabPanier[index + 1]) {
                paniertmp.push([valeur, i]);
                i = 0;
            }
        })
    }
    return (
        <View style={styles.backPanier}>
            <View style={styles.panier}>
                <View style={styles.innerPanier}>

                    <Text style={styles.h2}>Votre panier</Text>
                    <View style={styles.art}>
                        {
                            /* je boucle sur le tableau tabPanier qui contient les id de mes
                            articles achetés */
                            boutiqueContext.tabPanier.length > 0 ?

                                paniertmp.map((valeur, index) => {
                                    let name = boutiqueContext.articles[valeur[0]].name;
                                    let priceu = boutiqueContext.articles[valeur[0]].price;
                                    let pricet = boutiqueContext.articles[valeur[0]].price * valeur[1];
                                    let qtea = valeur[1];
                                    let url = boutiqueContext.articles[valeur[0]].url;
                                    // sur le modele de mon Bouton.js je "surveille" la qte disponible
                                    // pour rendre mon bouton + actif ou inactif
                                    let isActiveplus = boutiqueContext.articles[valeur[0]].qte === 0 ? true : false
                                    return (
                                        <View
                                            style={styles.panierEntries}
                                            key={index}>
                                            <Image source={url} style={styles.panImg} />
                                            <View style={styles.panText}>
                                                <Text style={styles.panName}>{name}</Text>
                                                <Text style={styles.priceu}>{priceu}€/unité</Text>
                                                <Text>
                                                    <Button
                                                        textColor="#000"
                                                        mode="outlined"
                                                        disabled={isActiveplus}
                                                        onPress={() => {
                                                            /* depuis le onClick sur ce bouton j'appelle la fonction decrementQte
                                                            liée à mon stateArticles (et donc mon BoutiqueContext) dans App.js */
                                                            boutiqueContext.decrementQte(valeur[0])
                                                        }}
                                                    >+</Button>
                                                    <View style={styles.txtQtea}>
                                                        <Text style={styles.qtea}>{qtea}</Text>
                                                    </View>
                                                    <Button
                                                        textColor="#000"
                                                        mode="outlined"
                                                        onPress={() => {
                                                            boutiqueContext.incrementQte(valeur[0])
                                                        }}
                                                    >-</Button>
                                                    
                                                </Text>
                                                <Text style={styles.pricet}>{pricet}€</Text>
                                            </View>
                                        </View>
                                    )
                                })
                                :
                                <Text>Votre panier est actuellement vide.</Text>
                        }
                    </View>
                    {
                        boutiqueContext.tabPanier.length > 0 ?
                            <Text style={styles.totalPrice}>Votre total : {boutiqueContext.totalPanier} €</Text>
                            :
                            <></>
                    }
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    backPanier: {
        zIndex:-1,
        height: "auto",
        justifyContent: "center",
        margin: 20,
        width: "100%"
    },
    panier: {
        backgroundColor: "rgb(255, 255, 255)",
        padding: 16,
        color: "#464646",
        borderRadius: 8,
        width: "90%",
    },
    h2:{
        fontWeight:"900",
        fontSize:16,
        color:"#464646",
        marginBottom:20
    },
    panierEntries: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingBottom: 8,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    panText: {
        textAlign: "center"
    },
    panName: {
        fontWeight: "900",
        color: "red",
        width: 165,
        marginBottom:15,
    },
    panImg: {
        width: 120,
        height: 150,
        resizeMode:'contain'
    },
    qtea: {
        textAlign: "center",
        color: "#000",
        margin:10
    },
    priceu: {
        textAlign: "center",
        color: "#000",
    },
    pricet: {
        color: "#000",
        textAlign: "center",
        fontWeight:"500"
    },
    totalPrice: {
        fontWeight: "900",
        textAlign: "right",
        width: "80%",
        color:"#464646",
    },
})
export { Panier }