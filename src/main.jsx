import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HooksApp } from './HooksApp.jsx'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterAppCustom } from './01-useState/CounterWithCustomHook.jsx'
import { CounterHook } from './01-useState/CounterHook.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import { Message } from './02-useEffect/Message.jsx'
import { MultipleConstHook } from './03-examples/MultipleCustomHook.jsx'
import { FocusScreen } from './04-useRef/FocusScreen.jsx'
import './index.css'
import { Layout } from './05-useLayoutEffect/Layout.jsx'
import { Memorize } from './06-memos/Memorize.jsx'
import { MemoHook } from './06-memos/MemoHook.jsx'
import { CallBackHook } from './06-memos/CallbackHook.jsx'
import { Padre } from './07-tarea-memo/Padre.jsx'
import "./08-useReducer/intro-reducer.js"
import { TodoApp } from './08-useReducer/TodoApp.jsx'
import { ContadorReducer } from './09-ContadorReducer/componentes/ContadorReducer.jsx'
import { MainApp } from './010-useContext/MainApp.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <MainApp />
    <hr></hr>
  </BrowserRouter>
)
