import React from 'react'
import ReactDOM from 'react-dom/client'
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
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp />
    <CounterApp />
    <CounterHook initialValue={20} />
    <CounterAppCustom inicio="35" /> */}
    {/* <SimpleForm /> */}
    {/* <MultipleConstHook />
    <FocusScreen /> */}
    {/* <Layout /> */}

    <hr></hr>
    {/* <MemoHook initialValue = {500} /> */}
    {/* <CallBackHook initialValue={50} /> */}
    {/* <Padre /> */}
    <TodoApp />
  </React.StrictMode>,
)
 