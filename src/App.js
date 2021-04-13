import './App.css';
import IndexPage from './IndexPage'
import IndexPageFurn from './IndexPageFurn'
import Authorization from './Authorization'
import LK from './LK'
import Messages from './messages/Messages'
import Message from './messages/Message'
import Basket from './Basket'
import MyShop from './MyShop'
import Seller from './Seller'
import Favorites from './Favorites'
import ItemDetails from './ItemDetails'
import { Provider } from 'react-redux'
import store from "./store/reducers"

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"


function App() {
  return (
    <Provider store = {store}>
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={IndexPage}/>
        <Route exact path='/furn' component={IndexPageFurn}/>
        <Route exact path='/auto' component={Authorization}/>     
        <Route exact path='/lk' component={LK}/>  
        <Route exact path='/messages' component={Messages}/>       
        <Route exact path='/message_read/:id' component={Message}/>    
        <Route exact path='/basket' component={Basket}/>     
        <Route exact path='/myshop' component={MyShop}/>
        <Route exact path='/seller/:id' component={Seller}/> 
        <Route exact path='/favorites' component={Favorites}/>    
        <Route exact path='/details/:id' component={ItemDetails}/>        
        <Route component={<div>NotFound</div>}/>
      </Switch>
    </BrowserRouter>
</div>
</Provider>
)
}

export default App;
