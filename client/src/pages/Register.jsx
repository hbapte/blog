import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <section className="background-radial-gradient overflow-hidden">
    
           
            <div className="card bg-glass mt-5 text-center">
              <div className="card-body px-4 py-3 px-md-5 w-[690px}">
                <h4 className="text-uppercase text-center mb-4">
                  Create an account
                </h4>
                <form className="text-center ">
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="first_name"
                          placeholder="First name"
                          className="form-control"
                        />
                        <label
                          className="form-label visually-hidden-focusable"
                          htmlFor="first_name"
                        >
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                          className="form-control"
                        />
                        <label
                          className="form-label visually-hidden-focusable"
                          htmlFor="last_name"
                        >
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="form-outline mb-3">
                    <input
                      type="email"
                      id="email_address"
                      name="password"
                      placeholder="Email address"
                      className="form-control"
                    />
                    <label
                      className="form-label visually-hidden-focusable"
                      htmlFor="email_address"
                    >
                      Email address
                    </label>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                    />
                    <label
                      className="form-label visually-hidden-focusable"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="password2"
                      placeholder="Confirm password"
                      className="form-control form-control"
                    />
                    <label
                      className="form-label visually-hidden-focusable"
                      htmlFor="password2"
                    >
                      Confirm password
                    </label>
                  </div>

                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-1">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example33"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>

                  {/* Terms & Condition */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3cg"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example3g"
                    >
                      I agree to{" "}
                      <a href="/terms" className="text-body">
                        <u>Terms & Conditions</u>
                      </a>
                    </label>
                  </div>

                  {/* Submit button */}
                  <div className="text-center mt-2 mb-3 ">
                    <button
                      type="submit"
                      className="btn btn-primary btn-flex justify-content-center px-5 mb-2"
                    >
                      Sign up
                    </button>
                  </div>

                  {/* <!-- Register buttons --> */}
                  <div className="text-center">
                    <p>Or sign in with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaFacebookF />
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaGoogle />
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaTwitter />
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaGithub />
                    </button>
                  </div>

                  <p className="text-center text-muted mt-3 mb-0">
                    Have already an account?{" "}
                    <a href="/login" className="fw-bold text-body">
                      <u>Login</u>
                    </a>
                  </p>
                </form>
              </div>
            </div>
    </section>
  );
};

export default Register;
