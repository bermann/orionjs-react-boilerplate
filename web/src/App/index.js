import React from 'react'
import Root from './Root'
import Pages from './Pages'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Root>
        <Pages />
      </Root>
    </BrowserRouter>
  )
}

export default App
