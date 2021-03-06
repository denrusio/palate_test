import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#333',
        secondary: '#26303d',
        accent: '#50749a',
        error: '#e06b6b',
        info: '#7da3bf',
        success: '#6bc56f',
        warning: '#ead11a'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
