import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ProgressBar = props => {
  // object destructuring and calculations for size of bar
  const {
    low,
    high,
    height,
    flexDirection,
    borderRadius,
    barColor,
    borderColor,
    backgroundColor,
  } = props

  // set flex value (relative length) of bar
  let flex = low / high
  if (flex > 1) {
    flex = 1
  }

  // combining static and dynamic styles into array (readability)
  const wrapperStyles = [
    styles.wrapper,
    {
      height: height == null ? 50 : height,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderRadius: borderRadius == null ? 20 : borderRadius,
      flexDirection: flexDirection == null ? 'row' : flexDirection,
    },
  ]
  const barStyles = {
    flex: flex == null ? 0.25 : flex,
    backgroundColor: barColor,
  }

  // return actual UI shown in the app/editor
  return (
    <View style={wrapperStyles}>
      <View style={barStyles} />
    </View>
  )
}

// Typechecking (for magic text in Adalo editor especially)
ProgressBar.propTypes = {
  low: PropTypes.number,
  high: PropTypes.number,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
}

// static styles with defaults
const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderWidth: 2,
  },
})

export default ProgressBar
