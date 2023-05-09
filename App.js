import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';
import axios from 'axios';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dogPhotos, setDogPhotos] = useState([]);
  const handleSearch = () => {
    axios.get(`https://dog.ceo/api/breed/${searchQuery}/images`)
      .then(response => {
        setDogPhotos(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>.</Text>
      <Text>.</Text>
      <Text>Por favor ingresar la raza del perro a buscar :</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Button
        title="Search"
        onPress={handleSearch}
      />
      <ScrollView>
        {dogPhotos.map(photo => (
          <Image
            key={photo}
            source={{ uri: photo }}
            style={{ width: 200, height: 200 }}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default App;
