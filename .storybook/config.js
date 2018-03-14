import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

import createGenerateClassName from 'material-ui/styles/createGenerateClassName'


const theme = createMuiTheme({});

addDecorator(withKnobs)

addDecorator((story) => (
    <MuiThemeProvider theme={theme}>
      {story()}
    </MuiThemeProvider>
))

const req = require.context('../stories', true, /\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
