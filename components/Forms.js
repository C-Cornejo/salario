import React from 'react';
import {StyleSheet, TextInput, View,Text} from 'react-native';
import colors from '../utils/colors';

export default function Form(props) {
const {setNombre,setBase} = props;
return (
    <View style={styles.viewForm}>
        <Text  style={styles.etiqueta}>Ingrese su salario base para calcular su sueldo neto</Text>
        <View style={styles.viewInputs}>
                <View>
            <Text>Nombre</Text>
                <TextInput style={styles.input}
                placeholder="Nombre"
                keyboardType="default"
                onChange={(e) => setNombre(e.nativeEvent.text)}/>
                {/* <Text style={styles.textStyle}>x^(2) +</Text> */}
            </View>
        <View>
            <Text>Salario base</Text>
            <TextInput style={styles.input}
            placeholder="Sueldo base"
            keyboardType="numeric"
            onChange={(e) => setBase(e.nativeEvent.text)}/> 
        </View>
        </View>
    </View>
);
}


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 26
    },
    etiqueta:
    {
        fontSize:14,
        marginBottom:5
    }
    ,
    viewForm: {
    // position: 'absolute',
    bottom: 0,
    width: '90%',
    paddingHorizontal: 10,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 20,
    height: '45%',
    justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row'
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '100%',
        marginLeft: 5,
        marginRight:5,
        color: 'green',
        paddingHorizontal: 20,
    },
    });
   