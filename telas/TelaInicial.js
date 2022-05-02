import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const imagem = require('../assets/imagens/icon.png');

const styles = StyleSheet.create
    (
        {
            container:
            {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            },
            fonte:
            {
                fontSize: 35,
                textAlign: 'center',
                marginBottom: 22,

            },
            bt: {
                backgroundColor: 'pink',
                width: 350,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10
            }
        }
    );

const Botao = ({ texto, onpress }) => { //componente botão personalizado
    return (
        <TouchableOpacity style={styles.bt}
            onPress={onpress} >
            <Text>{texto}</Text>
        </TouchableOpacity>
    )
}



function TelaInicial({ navigation }) {
    return (
        < View style={styles.container}>

            <Image source={imagem} alt="" />

            <Text style={styles.fonte}> Bem Vindo ao App </Text>
            <Text style={styles.fonte}> CEET Vasco Coutinho!</Text>

            <Botao texto={'Historia do CEET'}
                onpress={() => navigation.navigate('Historia')} />

            <Botao texto={'Cursos'}
                onpress={() => navigation.navigate('Cursos')} />

            <Botao texto={'Contato'}
                onpress={() => navigation.navigate('Contato')} />

            <Botao texto={'Portal'}
                onpress={() => navigation.navigate('Portal')} />




        </View>

    );
}
export default TelaInicial;


//npm install -g expo-cli