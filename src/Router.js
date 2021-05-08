import Navbar from './components/Navbar';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Bill from './components/Bill';


function Router() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
            <Switch>
              <Route exact path="/" >
                <h1>Bill</h1>
                <Bill isUser={false}/>
              </Route>
              <Route exact path="/usersbill">
                <h1>Users Bill</h1>
                <Bill isUser={true}/>
              </Route>
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Router