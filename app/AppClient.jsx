const React = require('react')
const Login = require('./Login')
const Layout = require('./Layout')
const Home = require('./Home')
const Profile = require('./Profile')
const { Router, Route, IndexRoute, hashHistory, browserHistory } = require('react-router')
const { Provider } = require('react-redux')

const App = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/home/profile' component={Profile} />
        </Route>
      </Router>
    )
  }
})

module.exports = App
