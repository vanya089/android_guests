import React from 'react'
import {StyleSheet,Text, View} from "react-native";

const Guest = ({item}) => {
  return (
    <View style={styles.guest} draggable={true}>
     <Text>{item.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  guest: {
      display: "flex",
      flexDirection: "row",
      width: 80,
      borderWidth: 1,
      borderColor: "green",
      borderRadius: 10,
  },
})
export default Guest