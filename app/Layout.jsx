const React = require('react')
const { Link } = require('react-router')

const Home = React.createClass({
  render () {
    return (
      <div>
        {this.props.children}
        <div>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/home/profile'>Profile</Link></li>
            <li><Link to='/'>Login</Link></li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Home
