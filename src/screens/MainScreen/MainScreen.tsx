import React, { useState } from 'react'
import { AsyncStorage, View, StyleSheet } from 'react-native'
import { Title, Paragraph, Snackbar, TextInput } from 'react-native-paper'

import { drinkItems } from './drinkItems'
import { DrinkingCharacter } from 'icons'
import { DrinkListItem } from 'components/view/DrinkListItem'
import { DrinkingProgress } from 'components/view/DrinkingProgress'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paragraph: {
    alignSelf: 'center'
  },
  text: {
    marginVertical: 16,
  },
  propgress: {
    marginTop: 60,
  }
})

const MainScreen: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [waterConsumed, setWaterConsumed] = useState(0)
  const [dailyGoal, setDailyGoal] = useState('')
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false)

  const handleAddQuantity = (value: number): void => {
    if (dailyGoal) {
      const newProgressValue = value / parseInt(dailyGoal)
      setProgress(currentValue => currentValue + newProgressValue)
      setWaterConsumed(currentConsumedWater => currentConsumedWater + value)
    } else {
      setIsSnackbarVisible(true)
    }
  }

  const handleChangeDailyGoal = (value: string): void => {
    setDailyGoal(value)
    const newProgressValue = waterConsumed / parseInt(value)
    setProgress(newProgressValue)
  }
  
  return (
    <>
      <View style={styles.page}>
        <View style={styles.mainContainer}>
          <View>
            <Title style={styles.title}>Monitoruj ilość spożytej wody</Title>
            <DrinkingCharacter />
            <Paragraph style={styles.text}>Ustaw dzienny cel (ilość wody w ml):</Paragraph>
            <TextInput
              label="Dzienny cel (ml)"
              keyboardType="phone-pad"
              value={dailyGoal}
              onChangeText={handleChangeDailyGoal}
            />
            {dailyGoal ? (
              <DrinkingProgress
                style={styles.propgress}
                dailyGoal={dailyGoal}
                progress={progress}
                waterConsumed={waterConsumed}
              />
            ) : null}
          </View>
          <View>
            <Paragraph style={styles.paragraph}>Wybierz ilość wody, którą właśnie wypiłeś</Paragraph>
            <View style={styles.actionsContainer}>
              {drinkItems.map(({ quantity, type }) => (
                <DrinkListItem
                  key={type}
                  onAddQuantity={() => handleAddQuantity(quantity)}
                  quantity={quantity}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={() => setIsSnackbarVisible(false)}
        action={{
          label: 'OK',
          onPress: () => {},
        }}>
        Aby wybrać ilość spożytej wody, najpierw należy wprowadzić dzienny cel
      </Snackbar>
    </>
  )
}

export { MainScreen }
