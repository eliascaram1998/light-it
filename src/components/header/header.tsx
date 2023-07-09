import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Dropdown from '../dropdown/dropdown';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Editar Medidas</Text>
      <View style={styles.dropdownContainer}>
        <Dropdown />
      </View>
    </View>
  );
};
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
  headerText: {
    color: 'white',
    fontSize: windowHeight * 0.03,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    height: windowHeight * 0.1,
    marginRight: '1%',
  },
});


export default Header;
