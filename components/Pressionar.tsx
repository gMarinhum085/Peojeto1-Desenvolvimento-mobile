import { View, Text, Pressable, StyleSheet } from 'react-native'

function Pressionavel() {

  function exibir() {
    alert('Botão pressionado')
  }
  
  return(
    <View>
      <Pressable style={styles.botao} onPress={exibir}>
        <Text style={styles.texto}> Inicie sua jornada DRM!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#99ccff',
    justifyContent: 'center',
    width: 280,
    height: 50,
    alignSelf:'center',
    marginTop: 10,
  },
  texto: {
    fontSize: 18,
    fontWeight:'bold',
    color: 'blue' ,
    textAlign: 'center'
  }
})

export default Pressionavel
