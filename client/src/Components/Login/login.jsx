import "./style/loginStyle.css"

import { Link } from 'react-router-dom'

function Login () {
  return (
    <div className="login-container flex-centering-item">
      <div className="login-container-cover flex-centering-item">
        <div class="register-container-cover-form signup-form">
          <form action="/examples/actions/confirmation.php" method="post">
          <h2>Login</h2>
          <p class="hint-text">Log in to your atmosphere</p>
          <div class="form-group">
            </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Email" required="required" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password" required="required" aria-autocomplete="list" />
              </div>
            <div class="form-group">
              <button type="button" class="btn btn-success btn-lg btn-block">Login</button>
            </div>
          </form>
          <div class="text-center">You have no account? <Link to="/register">Register here</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Login