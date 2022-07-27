import {StyleSheet} from "react-native";


const Css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFF259',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTop:{
      justifyContent:"flex-start"
    },
    container2: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#EFF259',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button__home: {
      marginRight: 40

    },
    Imag: { 
      width:100,
      height:100,
      marginRight: 20,
      borderRadius: 30
      
    },
    darkbg:{
      backgroundColor:"#EFF259"
  },
  login__logomarca:{
    marginBottom: 10
  },
  login__msg:(text='none')=>({
      fontWeight:"bold",
      fontSize: 22,
      color:"red",
      marginBottom: 15,
      display: text
  }),
  login__form:{
      width: "100%"
  },
  login__input:{
      backgroundColor: "#fff",
      fontSize: 19,
      padding: 7,
      margin: 15
      
  },
  login__button:{
      padding: 12,
      backgroundColor: "#F58634",
      alignSelf:"center",
      borderRadius:5
  },
  login__buttonText:{
      fontWeight:"bold",
      fontSize: 22,
      color:"#333",
  },
  area__tab:{
    backgroundColor:"#EFF259",
    fontSize:20,
    fontWeight:"bold",
    color:"#333"
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
  })
});

export {Css};