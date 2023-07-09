import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

interface BottomMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomMenu: React.FC<BottomMenuProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => setActiveTab('abertura')}
      >
        <Image
          source={activeTab === 'abertura' ? require('./images/Aberturas.png') : require('./images/Aberturas.png')}
          style={styles.tabButtonImage}
        />
        <Text style={[styles.tabButtonText, { color: activeTab === 'abertura' ? 'blue' : 'gray' }]}>Aberturas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => setActiveTab('equipamientos')}
      >
        <Image
          source={activeTab === 'equipamientos' ? require('./images/Equipamiento.png') : require('./images/Equipamiento.png')}
          style={styles.tabButtonImage}
        />
        <Text style={[styles.tabButtonText, { color: activeTab === 'equipamientos' ? 'blue' : 'gray' }]}>Equipamientos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => setActiveTab('terminaciones')}
      >
        <Image
          source={activeTab === 'terminaciones' ? require('./images/Terminaciones.png') : require('./images/Terminaciones.png')}
          style={styles.tabButtonImage}
        />
        <Text style={[styles.tabButtonText, { color: activeTab === 'terminaciones' ? 'blue' : 'gray' }]}>Terminaciones</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingBottom: 8,
  },
  tabButton: {
    alignItems: 'center',
  },
  tabButtonImage: {
    width: 24,
    height: 24,
  },
  tabButtonText: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default BottomMenu;
