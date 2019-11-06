import React from 'react'

export default function SignUp() {
	return (
		<section className='sign-up-form account-form'>
			<div className='form-aligner'>
				<div className='inner-box'>
					<div className='top-box'>
						<div className='top-box-text'>
							<h1>Get Started with Teachable</h1>
							<ol className='signup-step-anchor'>
								<li className='selected'>
									<span className='step-number'>1</span> Sign up for an account
								</li>
								<li>
									<span className='step-number'>2</span> Create your school
								</li>
							</ol>
						</div>
					</div>
					<div className='left-box'>
						<h1>Get Started with Teachable</h1>
						<img
							alt='SignUp background'
							src='https://s3-us-west-2.amazonaws.com/static-css-assets/bg/background-school-signup.svg'
						/>
						<ol className='signup-step-anchor'>
							<li className='selected'>
								<span className='step-number'>1</span> Sign up for an account
							</li>
							<li>
								<span className='step-number'>2</span> Create your school
							</li>
						</ol>
					</div>
					<div className='right-box'>
						<br />
						<div className='fields'>
							<div className='row'>
								<div className='col-sm-10 col-sm-offset-1'>
									<div className='error' id='error_username'>
										Please enter your name.
									</div>
									<div className='error' id='error_email'>
										Please enter a valid email.
									</div>
									<div className='error' id='error_pw'>
										Please enter a password which is at least six characters.
									</div>
									<div className='error' id='error_confirm'>
										Password and confirm password do not match.
									</div>
									<div className='error' id='error_terms'>
										You must agree to the terms of service to create an account.
									</div>
									<div className='error duplicate-account' id='error_duplicate_email'>
										An account with this email already exists.
										<br />
										<a href='/login'>Log in</a> or{' '}
										<a href='/forgot-password'>reset your password</a>.
									</div>
									<div className='error' id='error_server'>
										There was an unknown error.
									</div>
									<form
										className='new_teachable_account'
										id='new_teachable_account'
										acceptCharset='UTF-8'
									>
										<div className='group'>
											<label className='control-label' htmlFor='teachable_account_name'>
												Full Name
											</label>
											<div className='control-input'>
												<input
													autoFocus='autofocus'
													className='form-control input-hg'
													type='text'
													name='teachable_account[name]'
													id='modal_name_field'
												/>
											</div>
										</div>
										<div className='group'>
											<label className='control-label' htmlFor='teachable_account_email'>
												Email Address
											</label>
											<div className='control-input'>
												<input
													className='form-control input-hg'
													type='email'
													name='teachable_account[email]'
													id='modal_email_field'
												/>
											</div>
										</div>
										<div className='row'>
											<div className='group col-md-6 col-sm-12'>
												<label className='control-label' htmlFor='teachable_account_password'>
													Password
												</label>
												<div className='control-input'>
													<input
														autoComplete='off'
														className='form-control input-hg'
														autoFocus='autofocus'
														placeholder=''
														type='password'
														name='teachable_account[password]'
														id='modal_password_field'
													/>
												</div>
											</div>
											<div className='group col-md-6 col-sm-12'>
												<label
													className='control-label'
													htmlFor='teachable_account_password_confirmation'
												>
													Confirm Password
												</label>
												<div className='control-input'>
													<input
														autoComplete='off'
														className='form-control input-hg'
														type='password'
														name='teachable_account[password_confirmation]'
														id='modal_confirm_password_field'
													/>
												</div>
											</div>
										</div>

										<div className='agree-to-terms text-center'>
											<label className='checkbox-label'>
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
													className='terms-of-service-checkbox'
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
											<div
												id='error-terms-of-service-checkbox'
												className='input-error-message hide'
											>
												Please agree to the terms of service.
											</div>
										</div>

										<div className='hidden marketing-email-opt-in-container text-center'>
											<label htmlFor='opted-into-marketing-email' className='checkbox-label'>
												<input
													className='marketing-email-opt-in-input'
													type='checkbox'
													name='opted-into-marketing-email'
												/>
												I agree to receive product and marketing updates from Teachable
											</label>
										</div>

										<div className='account-form-button-container'>
											<br />
											<input
												autoComplete='off'
												type='submit'
												name='commit'
												value='Get Started'
												id='signup_final'
												className='orange-button btn'
											/>
										</div>
									</form>
									<div
										id='right-box-spinner'
										className='right-box-spinner create-form-spinner hidden'
									></div>
								</div>
							</div>
						</div>
						<div></div>
						<div className='box-footer full-width-box'>
							<h2>Already have an account?</h2>
							<a className='login-goto' href='/login'>
								Log in
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
