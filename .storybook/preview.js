import { withThemesProvider } from 'themeprovider-storybook'
import { sea } from '../src/themes'
import { mountain } from '../src/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const themes = [
  {
    ...sea,
    name: 'Sea'
  },
  {
    ...mountain,
    name: 'Mountain'
  }
]

export const decorators = [withThemesProvider(themes)]
