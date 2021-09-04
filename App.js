/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { restElement } from '@babel/types';
 import React,{useEffect, useState} from 'react';
 
 import {
   AppRegistry,
   SafeAreaView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
 } from 'react-native';
 import Footer from './components/Footer';
 import Form from './components/Forms';
 import Result from './components/Result';
 export default function App(){


   const [nombre,setNombre] = useState("");
   const [base,setBase] = useState(100);
   const [neto,setNeto]= useState(0);
   const [errorMessage,setErrorMessage] = useState("");
 
   useEffect( () =>{
       if(nombre != null)
       {
         calculate();
       }
       else
       {
        setErrorMessage("Ingrese un valor para nombre");
       }},[nombre,base]);

       const calculate = () =>
       {
          // reset();
          if(base < 0)
         {
           setErrorMessage("No se puede ingresar un saldo negativo");
         }
         else
         {
           let r = base - (base* (3/100)) -(base * (4/100)) - (base *(5/100));
           setNeto(r.toFixed(2));
         }
       }//metodo calculate
 
       const reset =() =>{
         setErrorMessage("");

         setNombre(null);
         setBase(null);
         setNeto(null);
       }
 
   return(
     <>
     <SafeAreaView style={styles.Header}>
     <Text style={styles.titulo}>Calculo de salario base</Text>
     <Text> Para usuarios con descuentos </Text>
     <Text>(ISSS- 3%, AFP-4%, RENTA-5%)</Text>
     <Form setNombre={setNombre} setBase={setBase}  />
     </SafeAreaView>
     <Result nombre={nombre} neto={neto} errorMessage={errorMessage}/>
 
         <Footer/>
  
     </>
   );
   }
 
   const styles = StyleSheet.create({
     Header:{
     backgroundColor:'#b6b6b6',
     height:'45%',
     borderBottomLeftRadius:15,
     borderBottomRightRadius:15,
     alignItems:'center',
 
   },
   titulo:{
     fontSize:32
   }
   });
 
   AppRegistry.registerComponent("App",()=> App);