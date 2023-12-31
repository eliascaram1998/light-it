import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomMenu from './BottomMenu';
import AberturaScreen from './screens/AberturaScreen';
import EquipamientosScreen from './screens/EquipamientosScreen';
import TerminacionesScreen from './screens/TerminacionesScreen';

const App = () => {
  const [activeTab, setActiveTab] = useState('abertura');

  const renderScreen = () => {
    switch (activeTab) {
      case 'abertura':
        return <AberturaScreen />;
      case 'equipamientos':
        return <EquipamientosScreen />;
      case 'terminaciones':
        return <TerminacionesScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <BottomMenu activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
