import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
// import AllJobDetails from './components/AllJobDetails'
import JobItemDetails from './components/JobItemDetails'
// import JobItemFetch from './components/JobItemFetch'
import JobsRoute from './components/JobsRoute'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      {/* <ProtectedRoute exact path="/jobs" component={AllJobDetails} /> */}
      <ProtectedRoute exact path="/jobs" component={JobsRoute} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />

      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
