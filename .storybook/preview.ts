import type { Preview } from '@storybook/nextjs'
import '../src/styles/globals.css'
import React from 'react'

const preview: Preview = {
  parameters: {
      actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;