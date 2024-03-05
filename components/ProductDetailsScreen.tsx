import { ScrollView, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export function DettaglioProdottoScreen({ route }: any) {
  const { product } = route.params;

  return(
    <ScrollView>
      <Text style={styles.titleText}>Dettaglio Prodotto {'\n'}</Text>
      <Text>Nome: {product.title}</Text>
      <Text>Descrizione: {product.description}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});