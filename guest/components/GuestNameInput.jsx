import React, { useState } from 'react'
import {TextInput} from "react-native";

const GuestNameInput = ({ index, board, boards, setBoards }) => {
  const [value, setValue] = useState('');

  const addGuest = (event, index, board) => {
    if (event) {

      const newGuest = {
        id: new Date().toISOString(),
        title: value
      }

      boards[index].items.push(newGuest);
      setBoards([...boards]);
      setValue('');
    }
  }

  return (
    <TextInput
      type="text"
      placeholder="Добавить гостя"
      onChangeText={(val) => setValue(val)}
      onSubmitEditing={(event) => addGuest(event, index, board)}
    />
  )
}

export default GuestNameInput;
