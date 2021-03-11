import './App.css';
import IndexPage from './IndexPage'
import Authorization from './Authorization'
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
        <Route component={<div>NotFound</div>}/>
      </Switch>
    </BrowserRouter>
</div>
)
}

export default App;
