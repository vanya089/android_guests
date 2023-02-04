import React, { useState } from 'react'
import {Button, TextInput, View} from "react-native";

const InputAddTable = ({ boards, setBoards }) => {
  const [boardTitle, setBoardTitle] = useState('')

  const addBoard = (val) => {
    if (val) {
        setBoards([
            ...boards,
            {
                id: new Date().toISOString(),
                title: boardTitle,
                items: []
            }
        ])
        setBoardTitle('')
    }
}

  return (

    <TextInput
      type="text"
      placeholder="Добавить стол"
      value={boardTitle}
      onChangeText={(val) => setBoardTitle(val)}
      onSubmitEditing={addBoard}
    />


  )
}

export default InputAddTable