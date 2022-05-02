import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';


const Botao = ({ texto, onpress }) => { //componente botão personalizado
    return (
        <TouchableOpacity style={styles.bt}
            onPress={onpress} >
            <Text>{texto}</Text>
        </TouchableOpacity>
    )
}


const Contato = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={styles.container}  >
            <View >
                <Text style={styles.titulo} >Fale Conosco</Text>
                <Text style={styles.fonte}>Preencha os campos para melhor atendermos</Text>
            </View>

            <View >

                <TextInput placeholder='    Seu nome'
                    style={styles.campo} />

                <TextInput placeholder='    Seu E-mail'
                    style={styles.campo} />

                <Text style={styles.fonte}> Diga-nos qual o motivo do contato:</Text>
                <TextInput placeholder=''
                    style={styles.descr} />



                <Botao texto={'Enviar'}
                    onpress={() => navigation.navigate('')}
                />
            </View>







        </KeyboardAvoidingView>
    )
}
export default Contato;

const styles = StyleSheet.create
    (
        {
            container:{
                alignItems: 'center'
            },
           
            bt: {
                backgroundColor: 'pink',
                width: 175,
                height: 60,
                left:100,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10
            },
            descr: {
                backgroundColor: '#fff',
                width: 350,
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                margin:10
            },
            campo: {
                backgroundColor: '#fff',
                width: 350,
                height: 68,               
                margin: 10
            },
            fonte:{
                fontSize: 18,
                textAlign: 'center',
                margin: 5
            
            },
        
            titulo:{
                fontSize:40,           
                textAlign: 'center',
                marginBottom:20,
                marginTop: 20
        
            }
        }
    );
