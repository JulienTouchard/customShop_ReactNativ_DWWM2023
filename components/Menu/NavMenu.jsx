
import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/';
import { MenuContext } from '../../MenuContext';
const NavMenu = () => {
  const menuContext = React.useContext(MenuContext);
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
          style={{ width: 50, height: 50 }}
        />
        <Menu
          style={stylesCSS.subMenu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button 
          mode="outlined"
          textColor='#fff'
          buttonColor="#ff7369"
          onPress={openMenu}>Menu</Button>}>
          <Menu.Item onPress={menuContext.fonctDisplayBoutique} title="Boutique" />
          <Menu.Item onPress={menuContext.fonctDisplayPanier} title="Panier" />
          <Menu.Item onPress={menuContext.fonctDisplayContact} title="Contact" />
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
    backgroundColor: "#f0f0f0"
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