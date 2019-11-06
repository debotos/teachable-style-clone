import React from 'react'

export default function SignUp() {
	return (
		<section class='sign-up-form account-form'>
			<div class='form-aligner'>
				<div class='inner-box'>
					<div class='top-box'>
						<div class='top-box-text'>
							<h1>Get Started with Teachable</h1>
							<ol class='signup-step-anchor'>
								<li class='selected'>
									<span class='step-number'>1</span> Sign up for an account
								</li>
								<li>
									<span class='step-number'>2</span> Create your school
								</li>
							</ol>
						</div>
					</div>
					<div class='left-box'>
						<h1>Get Started with Teachable</h1>
						<img
							alt='SignUp background'
							src='https://s3-us-west-2.amazonaws.com/static-css-assets/bg/background-school-signup.svg'
						/>
						<ol class='signup-step-anchor'>
							<li class='selected'>
								<span class='step-number'>1</span> Sign up for an account
							</li>
							<li>
								<span class='step-number'>2</span> Create your school
							</li>
						</ol>
					</div>
					<div class='right-box'>
						<br />
						<div class='fields'>
							<div class='row'>
								<div class='col-sm-10 col-sm-offset-1'>
									<div class='error' id='error_username'>
										Please enter your name.
									</div>
									<div class='error' id='error_email'>
										Please enter a valid email.
									</div>
									<div class='error' id='error_pw'>
										Please enter a password which is at least six characters.
									</div>
									<div class='error' id='error_confirm'>
										Password and confirm password do not match.
									</div>
									<div class='error' id='error_terms'>
										You must agree to the terms of service to create an account.
									</div>
									<div class='error duplicate-account' id='error_duplicate_email'>
										An account with this email already exists.
										<br />
										<a href='/login'>Log in</a> or{' '}
										<a href='/forgot-password'>reset your password</a>.
									</div>
									<div class='error' id='error_server'>
										There was an unknown error.
									</div>
									<form
										class='new_teachable_account'
										id='new_teachable_account'
										accept-charset='UTF-8'
									>
										<div class='group'>
											<label class='control-label' for='teachable_account_name'>
												Full Name
											</label>
											<div class='control-input'>
												<input
													autofocus='autofocus'
													class='form-control input-hg'
													value=''
													type='text'
													name='teachable_account[name]'
													id='modal_name_field'
												/>
											</div>
										</div>
										<div class='group'>
											<label class='control-label' for='teachable_account_email'>
												Email Address
											</label>
											<div class='control-input'>
												<input
													class='form-control input-hg'
													value=''
													type='email'
													name='teachable_account[email]'
													id='modal_email_field'
												/>
											</div>
										</div>
										<div class='row'>
											<div class='group col-md-6 col-sm-12'>
												<label class='control-label' for='teachable_account_password'>
													Password
												</label>
												<div class='control-input'>
													<input
														autocomplete='off'
														class='form-control input-hg'
														autofocus='autofocus'
														value=''
														placeholder=''
														type='password'
														name='teachable_account[password]'
														id='modal_password_field'
													/>
												</div>
											</div>
											<div class='group col-md-6 col-sm-12'>
												<label class='control-label' for='teachable_account_password_confirmation'>
													Confirm Password
												</label>
												<div class='control-input'>
													<input
														autocomplete='off'
														class='form-control input-hg'
														type='password'
														name='teachable_account[password_confirmation]'
														id='modal_confirm_password_field'
													/>
												</div>
											</div>
										</div>

										<div class='agree-to-terms text-center'>
											<label class='checkbox-label'>
												<input
													name='teachable_account[agreed_to_terms]'
													type='hidden'
													value='false'
												/>
												<input
													id='terms-of-service-checkbox'
													default='default'
													type='checkbox'
													value='true'
													name='teachable_account[agreed_to_terms]'
													class='terms-of-service-checkbox'
												/>
												I agree to the{' '}
												<a href='/terms-of-use' target='_blank' rel='noopener noreferrer'>
													Terms of Use
												</a>{' '}
												and{' '}
												<a href='/privacy-policy' target='_blank' rel='noopener noreferrer'>
													Privacy Policy
												</a>
											</label>
											<div id='error-terms-of-service-checkbox' class='input-error-message hide'>
												Please agree to the terms of service.
											</div>
										</div>

										<div class='hidden marketing-email-opt-in-container text-center'>
											<label for='opted-into-marketing-email' class='checkbox-label'>
												<input
													class='marketing-email-opt-in-input'
													type='checkbox'
													name='opted-into-marketing-email'
												/>
												I agree to receive product and marketing updates from Teachable
											</label>
										</div>

										<div class='account-form-button-container'>
											<br />
											<input
												autocomplete='off'
												type='submit'
												name='commit'
												value='Get Started'
												id='signup_final'
												class='orange-button btn'
											/>
										</div>
									</form>
									<div
										id='right-box-spinner'
										class='right-box-spinner create-form-spinner hidden'
									></div>
								</div>
							</div>
						</div>
						<div></div>
						<div class='box-footer full-width-box'>
							<h2>Already have an account?</h2>
							<a class='login-goto' href='/login'>
								Log in
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
