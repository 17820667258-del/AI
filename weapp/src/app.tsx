import { Component, PropsWithChildren } from 'react'
import { Provider } from 'react'
import './app.scss'

class App extends Component<PropsWithChildren> {
  render() {
    return this.props.children
  }
}

export default App
