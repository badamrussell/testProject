const React = require('react')

const Login = React.createClass({
  render () {
    return (
      <div>
        <h1>Login Page</h1>
        <form>
          <div>
            <label>
              name:
              <input name="username" type="text"></input>
            </label>
            <label>
              password:
              <input name="password" type="password"></input>
            </label>
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
})

module.exports = Login
