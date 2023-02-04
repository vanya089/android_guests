import React, {useState} from 'react'
import Board from './Board';
import InputAddTable from './InputAddTable';
import {StyleSheet, View} from "react-native";

const Boards = () => {
  const data = [
    { id: "1", title: 1, items: [{ id: "1654345", title: "Анатолий" }, { id: "2", title: "Маша" }]},
    { id: "2", title: 2, items: [{ id: "5", title: "Jane" }, { id: "324231", title: "Gleb" },]},
    { id: "3", title: 3, items: [{ id: "321", title: "Vasya" }, { id: "65", title: "Oksana" }]},
  ]

  const [boards, setBoards] = useState(data);

  return (
      <>
      <View >
          <InputAddTable setBoards={setBoards} boards={boards} />
      </View>

      <View style={styles.wrap}>
        {boards.map((board, index) =>
          <Board 
            key={board.id}
            board={board}
            index={index}
            setBoards={setBoards} 
            boards={boards}
          />
        )}
      </View>
      </>
  )
}
const styles = StyleSheet.create({
    wrap: {
       display: "flex",
    },
})
export default Boards