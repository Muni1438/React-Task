import React from 'react'
import {BrowserRouter as Router ,Route,Switch,} from "react-router-dom"
import Navigate from './Navigate'
import Testing from './Testing'
import ToDoApp from './ToDoApp'
import useOwnState from './useOwnState'
export const userContext=React.createContext();
function Task() {
    return (
        <div>
        <Router>
        <Navigate/>
        <Switch>
        <Route path="/task1">
        <userContext.Provider value={useOwnState}>
        <Testing/>
        </userContext.Provider>
        </Route>
        <Route path="/task2">
        <ToDoApp/>
        </Route>
        </Switch>
        </Router>       
        </div>
    )
}

export default Task

