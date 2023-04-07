import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState('');

  const handleSearch = () => {
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleSearch}
      />
      <Ionicons
        name="search"
        size={24}
        color="black"
        onPress={handleSearch}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        marginTop:80,
        borderWidth: 1,
        borderColor: 'black',
      },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
  },
});

export default SearchBar;
