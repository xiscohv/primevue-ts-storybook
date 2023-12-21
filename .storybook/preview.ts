import { type Preview, setup } from '@storybook/vue3'

import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import FocusTrap from 'primevue/focustrap'

import '../src/assets/theme.css'
import 'primeicons/primeicons.css'

setup((app) => {
  app.use(PrimeVue, { ripple: true })
  app.use(ConfirmationService)
  app.use(ToastService)
  app.directive('focus-trap', FocusTrap)
})
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
