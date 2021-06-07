import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProgressBar = props => {
  const {low, high, color, text, barColor, backgroundColor, borderColor } = props
  const flex = low/high

  // what actually shows up in app
  return (
    <>
    <View style={[styles.wrapper, {backgroundColor: backgroundColor}, {borderColor: barColor}]}>
      <View style={[{flex}, {backgroundColor: barColor}]}>

      </View>
    </View>
    <Text style={ [styles.text, {color}] }>{text}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 50,
    padding: 0,
    borderWidth: 2,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default ProgressBar
