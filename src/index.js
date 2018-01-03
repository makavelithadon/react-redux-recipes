import React from 'react'
import ReactDOM from "react-dom"
import App from "./components/container/App"
import { Provider } from "react-redux"
import configureStore from './redux/configureStore'
import 'semantic-ui-css/semantic.min.css'
import './styles.css'
import initialState from "./initialState.json"

const store = window.store = configureStore();

initialState
  .forEach(item => {
    store.dispatch({
      ...item,
      type: item.type === 'recipe'
        ? 'ADD_RECIPE'
        : 'ADD_INGREDIENT'
    })
  })

store.subscribe(() => {
  console.log(store.getState())
})

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
