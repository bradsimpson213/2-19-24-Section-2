import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import configureStore from './store/store.js'
import App from './App.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import PostsProvider from './context/PostsContext.jsx'
import './index.css'


const store = configureStore()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <ThemeProvider>
        <PostsProvider>
          <App />
        </PostsProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
