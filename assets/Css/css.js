import {StyleSheet} from "react-native";


const Css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF259',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTop: {
    justifyContent: 'flex-start'
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EFF259',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button__home: {
    marginRight: 40
  },
  darkbg: {
    backgroundColor: '#EFF259'
  },
  login__logoText:{
    fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
    marginBottom: 20
  },
  login__msg: (text = 'none')=> ({
    fontWeight: "bold",
    fontSize: 22,
    color: "red",
    marginTop: 10,
    marginBottom: 15,
    display: text
  }),
  login__form:{
    width: "80%"
  },
  login__input:{
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 15
  },
  login__button:{
    padding: 12,
    backgroundColor: "#F58634",
    alignSelf: "center",
    borderRadius: 5
  },
  login__buttonText:{
    fontWeight: "bold",
    fontSize: 19,
    color: "#fff"
  },
  area__tab: {
    backgroundColor: '#EFF259',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#171716'
  },
  area__menu:{
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 10,
    width: '100%',
    backgroundColor:'#111',
    alignItems:'center',
    justifyContent:'center'
  },
  button__home2:{
      textAlign:'left'
  },
  area__title:{
      width: '80%',
      fontWeight:'bold',
      fontSize:20,
      color:'#fff',
      textAlign:'center'
  },
  button__logout:{
      textAlign:'right'
  },
  qr__code:(display='flex')=>({
    width:'100%',
    height:'100%',
    backgroundColor:'#000',
    justifyContent:'center',
    display: display
  }),
  qr__form:(display='none')=>({
    width: '100%',
    display:display
  }),
  rescanner__button: {
    marginTop: 20
  },
  sucess__text: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "#F58634"
  },
  rastreio__inputMargin:{
    marginTop: 20,
    marginBottom: 30,
    borderColor: '#EFF259',
    borderBottomWidth: 1,
  },
  inputBox:{
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15,
  },
  texte__profile: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  msg__rastreio:{
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    fontSize: 18,
    backgroundColor:'#d2e1f6',
    marginTop: 15
  },

    container2: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#EFF259',
      alignItems: 'center',
      justifyContent: 'center',
    },

    Imag: { 
      width:100,
      height:100,
      marginRight: 20,
      borderRadius: 30
      
    },
    Imag1: { 
      width:305,
      height:260,
      borderRadius: 30
      
    },
    Imag4: { 
      width:100,
      height:100,
      marginRight: 20,
      borderRadius: 30,
      marginTop:10
      
    },
    Imag5: { 
      width:100,
      height:100,
      marginRight: 20,
      borderRadius: 50,
      marginTop:10
      
    },



  container3: {
    flex: 1,
    backgroundColor: '#EFF259',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Imag2: { 
    width:305,
    height:260,
  },
  Text1: {
    color: '#C52B46',
    fontSize: 30 ,
  },
  Text2: {
    width:337,
	  height:77,
    margin:10,
    color: '#171716',
    fontSize: 16,

  },
  Inicio__button:{
    padding: 12,
    backgroundColor: "#F58634",
    alignSelf:"center",
    borderRadius:5,
    margin:10,
},
Inicio:{
  width:90,
  height:40,
  padding: 10,
  backgroundColor: "#2196F3",
  margin:10,
},
Imag3: { 
  width:100,
  height:100,
  marginRight: 20,
  borderRadius: 30,
  margin:10
  
},
});

export {Css};