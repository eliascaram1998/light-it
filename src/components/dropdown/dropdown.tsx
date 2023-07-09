import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const width = Dimensions.get('window').width;

const Dropdown = () => {
  const dropdownItems = [
    { label: 'Guardar y Salir', value: 'Guardar y Salir' },
    { label: 'Guardar y Continuar', value: 'Guardar y Continuar' },
    { label: 'Salir sin Guardar', value: 'Salir sin Guardar' },
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (itemValue: any) => {
    setSelectedValue(itemValue);
  };

  return (
    <Picker
      style={styles.dropdown}
      mode="dropdown"
      numberOfLines={2}
      itemStyle={styles.dropdownItem}
      selectedValue={selectedValue}
      onValueChange={handleValueChange}
    >
      {dropdownItems.map((item, index) => (
        <Picker.Item key={index} 
        style={{fontSize:10}} 
        label={item.label} 
        value={item.value} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: '#fafafa',
    width: width * 0.4,
    borderWidth: 0,
  },
  dropdownItem: {
    flexWrap: 'wrap',
  },
});

export default Dropdown;