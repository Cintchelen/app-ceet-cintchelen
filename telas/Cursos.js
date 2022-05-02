import React from 'react';
import { View, ScrollView , Image} from 'react-native';

const imagem = require('../assets/imagens/icon.png');

const Cursos = ({ Navigation}) => {
    return (
        <ScrollView>
            <View>
            <Image source={imagem} alt=""/>


            </View>
        </ScrollView>
    )
}