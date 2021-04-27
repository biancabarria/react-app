import React from 'react'
import { Route, Switch } from 'react-router-dom'

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