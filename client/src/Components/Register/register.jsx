import "./style/registerStyle.css"
import { Link } from 'react-router-dom'

function Register () {
  return (
    <div className="register-container flex-centering-item">
      <div className="register-container-cover flex-centering-item">
        <div class="register-container-cover-form signup-form">
          <form action="/examples/actions/confirmation.php" method="post">
          <h2>Register</h2>
          <p class="hint-text">Create your account. It's free and only takes a minute.</p>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" />
              </div>
              <div class="col">
                <input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" />
              </div>
            </div>
            </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="Email" required="required" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password" required="required" aria-autocomplete="list" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
              </div>
            <div class="form-group">
              <button type="button" class="btn btn-success btn-lg btn-block">Register Now</button>
            </div>
          </form>
          <div class="text-center">Already have an account? <Link to="/login">Login</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Register