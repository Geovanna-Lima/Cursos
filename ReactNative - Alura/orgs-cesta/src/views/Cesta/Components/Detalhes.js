import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../Components/Texto';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao }) {
    return <>
        <Texto style={style.nome}>{nome}</Texto>
        <View style={style.fazenda}>
            <Image style={style.imagemFazenda} source={logoFazenda}></Image>
            <Texto style={style.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={style.descricao}>{descricao}</Texto>
    </>
}

const style = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
});