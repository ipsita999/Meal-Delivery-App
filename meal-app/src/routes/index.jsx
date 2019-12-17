import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/screens/Home'
import Items from '../components/screens/Items'
import Recipe from '../components/screens/Recipe'

const Routes = ({ items }) => (

    <Switch>
        <Route
            exact
            path="/"
            render={props => <Home {...props} />}
        />
        <Route
            exact
            path="/results"
            render={props => <Items {...props} />}
        />
        <Route
            exact
            path="/results/:id"
            render={props => <Recipe {...props}/>}
        />
        
    </Switch>
)

export default Routes