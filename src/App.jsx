import './App.css'
import { Home } from './pgs/Home'
import { Menu } from './pgs/Menu'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Topo } from './pgs/Topo'
import { Med } from './pgs/Med'
import { Mb } from './pgs/Mb'
import { Vs } from './pgs/vs'
function App() {

  return (
      <Router>
        <Topo/>
        <Menu/>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/med' exact element={<Med/>}/>
            <Route path='/vs' exact element={<Vs/>}/>
            <Route path='/mb' exact element={<Mb/>}/>
        </Routes>
    </Router>
  
    
  )
}

export default App
