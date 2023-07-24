import React from 'react'
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';


const Login = () => {
  return (
    <section class="background-radial-gradient overflow-hidden">

  <div class="container px-4 py-3 px-md-5 text-center text-lg-start my-3">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5  position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        <div class="card bg-glass">
          <div class="card-body px-4 py-5 px-md-5">
            <h4 class="text-uppercase text-center  mb-5">Get started</h4>
            <form>
              
              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <label class="form-label text-right" for="form3Example3">Email address</label>
                <input type="email" id="form3Example3" class="form-control" />
                
              </div>



              <div class="form-outline mb-2">
                <label class="form-label text-left" for="password">Password</label>
                <input type="password" id="password"  class="form-control form-control" />
                
              </div>

              {/* <!-- Checkbox --> */}
              <div class="form-check d-flex justify-content-between mb-4">
                <div>
                <input class="form-check-input me-2 d-block" type="checkbox" value="" id="remember"/>                
                <label class="form-check-label" for="remember">
                Remember Me
                </label>
              </div>
               <a href="/passwordreset ">Forgot password?</a> 
              </div>
              
                    {/* Submit button */}
                      <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-flex justify-content-center mb-4 mt-3 px-5">
                      Sign In
                    </button>
                  </div>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
      <p>Or sign in with:</p>
      <button type="button" className="btn btn-link btn-floating mx-1">
        <FaFacebookF />
      </button>

      <button type="button" className="btn btn-link btn-floating mx-1">
        <FaGoogle />
      </button>

      <button type="button" className="btn btn-link btn-floating mx-1">
        <FaTwitter />
      </button>

      <button type="button" className="btn btn-link btn-floating mx-1">
        <FaGithub />
      </button>
    </div>

              <p class="text-center text-muted mt-3 mb-0">No account? <a href="/register"
                class="fw-bold text-body"><u>Sign Up</u></a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login