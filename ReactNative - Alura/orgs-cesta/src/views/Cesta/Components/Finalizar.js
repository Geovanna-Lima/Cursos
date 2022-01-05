import React from 'react';
import { StyleSheet } from 'react-native';

import Texto from '../../../Components/Texto';
import Botao from '../../../Components/Botao';

export default function Finalizar({ preco, botao }) {
    return <>
        <Texto style={style.preco}>{preco}</Texto>
        <Botao texto={botao} style={style.botao} onPress={() => { }} />
    </>
}

const style = StyleSheet.create({
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 15,
        textAlign: "center",
    },
    botao: {
        marginVertical: 16,
    },
});