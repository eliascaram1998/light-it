import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
//@ts-ignore
import Carousel from 'react-native-snap-carousel';
import Header from '../components/header/header';

const API_URL = 'https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento';

interface Category {
  name: string;
  items: any[];
}

const EquipamientoScreen = () => {
  const [data, setData] = useState<Category[]>([]);
  const [selectedItem, setSelectedItem] = useState(null);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonPress = (item: any) => {
    setSelectedItem(item);
  };
  

  const handleButton = (selected: string) => {
    console.log('You pressed the button: ' + selected);
  };

  const renderDetailsScreen = () => {
    if (selectedItem) {
  
      return (
        <View style={styles.detailsContainer}>
          <Carousel
            data={selectedItem}
            renderItem={({ item }: { item: { name: string, img: string } }) => (
              <View>
                <Image source={{ uri: item.img }} style={styles.itemImage} />
                <Text style={styles.itemTitle}>{item.name}</Text>
              </View>
            )}
            sliderWidth={300}
            itemWidth={150}
            loop
            autoplay
            autoplayInterval={3000}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.whiteButton]}
            onPress={() => handleButton('Fijar')}
          >
            <Text style={styles.buttonText}>Fijar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.whiteButton]}
            onPress={() => handleButton('Borrar')}
          >
            <Text style={styles.buttonText}>Borrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryContainer}>
          {data.map((category) => (
            <TouchableOpacity
              style={[
                styles.button,
                selectedItem === category.items ? styles.selectedButton : null,
              ]}
              onPress={() => handleButtonPress(category.items)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedItem === category.items ? styles.selectedButtonText : null,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderDetailsScreen()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  contentContainer: {
    flex: 1,
  },
  whiteButton: {
    backgroundColor: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop:8,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  selectedButtonText: {
    color: 'white',
  },
  detailsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  itemImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default EquipamientoScreen;