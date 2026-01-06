

import './App.css'
import {Routes, Route} from 'react-router-dom'
import {ClerkProviderwithRoutes}from './auth/ClerkProviderwithRoutes'
import {AuthenticationPage} from './auth/AuthenticationPage'
import {ChallengeGenerator} from './Challenge/ChallengeGenerator'
import {HistoryPanel} from './history/HistoryPanel'
import {Layout} from './layout/Layout'

function App() {
 
  return(
    <ClerkProviderwithRoutes>
      <Routes>
        <Route path='/sign-in' element={<AuthenticationPage/>}/>
        <Route path='/sign-out' element={<AuthenticationPage/>}/>
        <Route element={<Layout/>}>
          <Route path='/' element={<ChallengeGenerator/>}/>
          <Route path='/history' element={<HistoryPanel/>}/>
        </Route>
      </Routes>
    </ClerkProviderwithRoutes>
  )
}

export default App
