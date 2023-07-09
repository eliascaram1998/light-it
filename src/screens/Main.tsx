import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomMenu from '../components/buttons/BottomMenu';
import AberturaScreen from './AberturaScreen';
import EquipamientosScreen from './EquipamientosScreen';
import TerminacionesScreen from './TerminacionesScreen';
import SplashScreen from './SplashScreen';

const App = () => {
  const [activeTab, setActiveTab] = useState('abertura');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000); 
  }, []);

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
      {showSplash ? <SplashScreen /> : renderScreen()}
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
