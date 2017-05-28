
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const App = () => {
  return (
    <MuiThemeProvider>
      {/* your content */}
    </MuiThemeProvider>
  )
}

export default App
