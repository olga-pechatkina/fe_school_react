import './App.css';
import IndexPage from './IndexPage'
import Authorization from './Authorization'
import LK from './LK'
import Messages from './Messages'
import Message from './Message'
import Basket from './Basket'
import MyShop from './MyShop'
import Seller from './Seller'
import Favorites from './Favorites'
import ItemDetails from './ItemDetails'

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
        <Route exact path='/basket' component={Basket}/>     
        <Route exact path='/myshop' component={MyShop}/>
        <Route exact path='/seller' component={Seller}/> 
        <Route exact path='/favorites' component={Favorites}/>    
        <Route exact path='/details' component={ItemDetails}/>        
        <Route component={<div>NotFound</div>}/>
      </Switch>
    </BrowserRouter>
</div>
)
}

export default App;
