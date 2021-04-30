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
                <Bill/>
              </Route>
              <Route exact path="/usersbill">
                <h1>Users Bill</h1>
              </Route>
            </Switch>
        </div>
        </div>
    </BrowserRouter>
  )
}

export default Router