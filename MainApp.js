import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Home from './Home';
import UserDetail from './UserDetail';


class MainApp extends React.Component{



render(){
    return(
        <div> 
           <BrowserRouter>
               <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route path="/users/:id" component={ UserDetail } />
                   </Switch>
           </BrowserRouter>
     </div>
)
}
}

export default MainApp;
