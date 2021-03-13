import './App.css';
import IndexPage from './IndexPage'
import Authorization from './Authorization'
import LK from './LK'
import Messages from './Messages'
import Message from './Message'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"


function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={IndexPage}/>
        <Route exact path='/auto' component={Authorization}/>     
        <Route exact path='/lk' component={LK}/>  
        <Route exact path='/messages' component={Messages}/>       
        <Route exact path='/message_read' component={Message}/>              
        <Route component={<div>NotFound</div>}/>
      </Switch>
    </BrowserRouter>
</div>
)
}

export default App;
