import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from 'common/routes'
import MasterPage from 'components/master-page'
import PayPage from 'pages/pay'
import NotFoundPage from 'pages/not-found'

class App extends React.PureComponent {
    render() {
        return (
            <MasterPage>
                <Switch>
                    <Route path={routes.pay} component={PayPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </MasterPage>
        )
    }
}

export default App
