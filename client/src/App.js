import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NewPlace from "./places/pages/NewPlace";
import { SnackbarProvider } from 'notistack';
import Places from "./places/pages/Places";
import Navbar from './Utils/NavBar'
function App() {
  return (
    <BrowserRouter>
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <Navbar />
    <Switch>
      
        <Route path="/" exact>
          <Places />
        </Route>
        <Route path="/newPlace" exact>
          <NewPlace />
        </Route>
        
        
        </Switch>
        </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
