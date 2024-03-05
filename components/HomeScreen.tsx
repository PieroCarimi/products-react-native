import { AppContext } from "../ContextProvider";
import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { StyleSheet } from 'react-native';

export function HomeScreen({ navigation }: any){
  const { products }: any = React.useContext(AppContext);
  
  return (
    <ScrollView>
      <Text style={styles.titleText}>Lista prodotti {'\n'}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}: any) => (
          <TouchableOpacity onPress={() => navigation.navigate('DettaglioProdotto', {product: item})}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});