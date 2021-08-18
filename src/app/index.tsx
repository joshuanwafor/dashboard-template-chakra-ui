import React from 'react';
import LayoutSetup from "./envSetup/layout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AppContainer from "./appContainer/wrapper"
function App() {
    return (
        <LayoutSetup>
            <Router>
                <Switch>
                    <Route path="">
                        <AppContainer />
                    </Route>
                </Switch>
            </Router>
        </LayoutSetup>
    );
}

export default App;
