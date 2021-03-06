import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import DisplayCategory from './components/DisplayCategory';
import DisplaySuppliers from './components/DisplaySuppliers';
import DisplayProducts from './components/DisplayProducts';
class App extends React.Component{

render(){
return(
  <div>  
    <Router>
      <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route path="/categories"  component={ DisplayCategory } />
        <Route  path="/suppliers" component={ DisplaySuppliers }/>
        <Route path="/products" component={DisplayProducts} />

      </Switch>
      </Router>
  </div>
)

}
}

export default App;