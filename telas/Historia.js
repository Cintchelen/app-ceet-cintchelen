import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


const Historia = ({ navigation }) => {
    return (
        <ScrollView>
        <View>
            <Text style={styles.titulo}>Oportunidades no CEET!</Text>

            <Text style={styles.fonte}>As pessoas que moram no Espírito Santo e que possuem o desejo de obter uma formação técnica contam com
                 diferentes opções para conseguir o diploma neste tipo de curso. A novidade a respeito dos cursos técnicos
                  oferecidos nesta região é que os Centros Estaduais de Educação Técnica conhecidos como CEETs estão 
                  oferecidos formações gratuitas nesta modalidade em duas cidades do estado.</Text>

                  <Text style={styles.titulo}>Onde fica?</Text>
                  <Text style={styles.fonte}>Endereço: Av. Luciano das Neves, s/n - Centro de Vila Velha, Vila Velha - ES, 29100-060</Text>




        </View>
        </ScrollView>
    );
}

export default Historia;

const styles = StyleSheet.create({
    fonte:{
        fontSize: 18,
        textAlign: 'justify',
        margin: 20
    
    },

    titulo:{
        fontSize:30,
        margin: 10,
        textAlign: 'center',

    }

})

