import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../Components/Texto';

import Topo from './Components/Topo';
import Detalhes from './Components/Detalhes';
import Item from './Components/Item';
import Finalizar from './Components/Finalizar';

export default function Cesta({ topo, detalhes, itens, finalizar }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={style.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={style.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
            ListFooterComponent={() => {
                return <>
                    <Finalizar {...finalizar} />
                </>
            }}
        />
    </>
}

const style = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 22,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});