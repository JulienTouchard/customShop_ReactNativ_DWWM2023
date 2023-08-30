
import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/';
const NavMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider
      settings={{
        icon: props => <FontAwesomeIcon icon={faBars} />,
      }}
    >
      <View
        style={stylesCSS.backgroundMenu}>

        <Image source={require('../../assets/img/logo.jpg')} 
        style={{width:50,height:50}}
        />
        <Menu
          style={stylesCSS.subMenu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show menu</Button>}>
          <Menu.Item onPress={() => { }} title="Panier" />
          <Menu.Item onPress={() => { }} title="Contact" />
        </Menu>
      </View>
    </PaperProvider>
  );
};
const stylesCSS = StyleSheet.create({
  backgroundMenu: {
    zIndex: 2,
    position: "relative",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor:"#f0f0f0"
  },
  subMenu:
  {
    position: "absolute",
    top: 0,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 200,
    height: 300
  }
});

export { NavMenu };