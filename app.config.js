import 'dotenv/config'

import packageJson from './package.json'

export default {
  expo: {
    name: 'fill-the-glass',
    slug: 'fill-the-glass',
    version: packageJson.version,
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      useNextNotificationsApi: true
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messageSenderId: process.env.MESSAGE_SENDER_ID,
      appId: process.env.APP_ID,
      measurementID: process.env.MEASUREMENT_ID,
    }
  }
}
