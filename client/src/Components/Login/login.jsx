import "./style/loginStyle.css"

function Login () {
  return (
    <div className="login-container flex-centering-item">
      <div className="login-container-cover flex-centering-item">
        <div class="register-container-cover-form signup-form">
          <form action="/examples/actions/confirmation.php" method="post">
          <h2>Login</h2>
          <p class="hint-text">Log in to your atmosphere</p>
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

export default Login