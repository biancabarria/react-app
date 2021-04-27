import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class App extends React.Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exac path="/" component={Home} />
                    <Route exac path="/about" component={About} />
                    <Route exac path="/contact" component={Contact} />
                </Switch>
            </div>
        )
    }
}

export default App