import React from 'react';
import { Switch,Route,BrowserRouter} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import Pricing from './Pricing';
import Album from './Landing';
const App = () => {
    return ( 
        <div>

        <StylesProvider>
            <BrowserRouter>
            <Switch>
           <Route exact path="/pricing" component={Pricing}></Route>
           <Route exact path="/" component={Album}></Route>        
            </Switch>
            </BrowserRouter>

        </StylesProvider>
    </div>
     );
}
 
export default App