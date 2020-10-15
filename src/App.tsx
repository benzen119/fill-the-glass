import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as BackgroundFetch from 'expo-background-fetch'
import * as TaskManager from 'expo-task-manager'
import * as Notifications from 'expo-notifications'

import { DRINK_WATER_REMINDER_TASK } from 'constants/tasks'
import { StackNavigator } from 'navigation/StackNavigator'

const handlePresentLocalNotificationAsync = async () => {
  await Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  })
  
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Fill The Water',
      body: 'Czas napić się wody!',
    },
    trigger: null
  })
}

TaskManager.defineTask(DRINK_WATER_REMINDER_TASK, async () => {
  try {
    await handlePresentLocalNotificationAsync()
  } catch (error) {
    return BackgroundFetch.Result.Failed;
  }
})

const App: React.FC = () => {
  useEffect(() => {
    const registerTaskAsync = async () => {
      BackgroundFetch.registerTaskAsync(DRINK_WATER_REMINDER_TASK, {
          minimumInterval: 3600 * 2, // 2 hours
          stopOnTerminate: false,
          startOnBoot: true,
        },
    ).then(() => BackgroundFetch.setMinimumIntervalAsync(3600 * 2)) // 2 hours
    }
  
    registerTaskAsync()
  }, [])

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export { App }
