import React, {useState} from 'react'
import Guest from './Guest'
import GuestNameInput from './GuestNameInput'
import {StyleSheet, Text, View} from "react-native";

const Board = ({board, index, setBoards, boards}) => {

    return (
        <View style={styles.board}>

            <Text>{board.title}</Text>
            <View style={styles.guest}>
                {board.items.map(item =>
                    <Guest key={item.id} item={item}/>
                )}
            </View>

            <GuestNameInput
                index={index}
                board={board}
                setBoards={setBoards}
                boards={boards}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    board: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 300,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 10,
        marginBottom: 10,
    },

})
export default Board