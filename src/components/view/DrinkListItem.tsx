import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'

import { Glass } from 'icons'

const styles = StyleSheet.create({
  label: {
    marginTop: -16
  },
  ripple: {
    paddingHorizontal: 16
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

type DrinkListItemProps = {
  quantity: number
  onAddQuantity: () => void
}

const DrinkListItem: React.FC<DrinkListItemProps> = ({ quantity, onAddQuantity }) => {
  return (
    <TouchableRipple
      style={styles.ripple}
      rippleColor="#CCCCCC"
      onPress={onAddQuantity}
    >
      <View style={styles.item}>
        <Glass />
        <Text style={styles.label}>{`${quantity} ml`}</Text>
      </View>
    </TouchableRipple>
  )
}

export { DrinkListItem }
