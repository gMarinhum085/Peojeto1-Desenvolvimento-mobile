import { View, Text, StyleSheet } from 'react-native'
//Aqui importamos um componente da pasta componente
import Pressionavel from './components/Pressionar'

//Aqui temos a função principal a ser utilizada
function App() {
//Aqui retornamos a nossa tela para o usuario
  return(
    //A tag View é utilizado para criar uma caixa visível para o usuário
    //A tag Text é utilizado para inserir textos 
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo à EEEP DEPUTADO ROBERTO MESQUITA!</Text>
      <Text style={styles.subtitle}>Venha fazer parte da escola que prepara profissionais para o mercado de trabalho </Text>
      <Text style={styles.title2}>Escolha um curso e faça sua história!</Text>
     <Text style={styles.subtitle2}>Aqui você pode escolher cursar Administração, Desenvolvimento de Sistemas ou Rede de Computadores. Todos eles possuem alta demanda no mercado atual.</Text>
      <Pressionavel />
  <Text style={styles.footer}>2024 EEEP Deputado Roberto Mesquita.</Text>
    </View>
  )
}

//Contante utilizada para estilização
const styles = StyleSheet.create({
  title:{
    fontSize: 18,
    color: 'white',
    fontWeight:'bold',   backgroundColor:'green',
    textAlign: 'center',
  },

  container: {

    height:'100%',
  },
  
  subtitle: {
    fontSize: 12,
    marginLeft:10,
    marginRight:10
  },

  title2: {
    fontSize: 14,
    color: 'white',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    fontWeight:'bold',   backgroundColor:'orange',
    textAlign: 'center',
  },

  subtitle2: {
    fontSize: 12,
    marginLeft:10,
    marginRight:10
  },

  footer:{
    fontSize:12,
    textAlign:'center'
  }
})

//Exportamos a tela para a aplicação
export default App