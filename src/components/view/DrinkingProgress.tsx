import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { ProgressBar, Colors, Paragraph } from 'react-native-paper'

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginVertical: 16,
    fontWeight: 'bold'
  },
  progress: {
    height: 30
  }
})

type DrinkingProgresssProps = {
  dailyGoal: string
  progress: number
  waterConsumed: number
  style: ViewStyle
}

const DrinkingProgress: React.FC<DrinkingProgresssProps> = ({ progress, dailyGoal, style, waterConsumed }) => {
  return (
    <View style={style}>
      <ProgressBar
        style={styles.progress}
        progress={progress}
        color={Colors.blue800}
      />
      <Paragraph style={styles.text}>{`Dzisiaj wypiłeś ${waterConsumed} ml z ${dailyGoal} ml`}</Paragraph>
    </View>
  )
}

export { DrinkingProgress }
