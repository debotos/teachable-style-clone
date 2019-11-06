import React from 'react'

export default function Login() {
	return (
		<section class='login-form account-form'>
			<div class='form-aligner'>
				<div class='inner-box'>
					<div class='top-box'>
						<div class='top-box-text'>
							<h1>Log in to Teachable</h1>
						</div>
					</div>
					<div class='left-box'>
						<h1>Log in to Teachable</h1>
						<img
							alt='Login background'
							src='https://s3-us-west-2.amazonaws.com/static-css-assets/bg/background-school-signup.svg'
						/>
					</div>
					<div class='right-box'>
						<br />
						<div class='row'>
							<div class='col-sm-10 col-sm-offset-1'>
								<div id='login-fields' class='fields'>
									<div id='error-invalid-email' class='error'>
										Please enter a valid email address.
									</div>
									<div id='error-password' class='error'>
										Please enter a password which is at least six characters.
									</div>
									<div id='error-server' class='error'>
										Your email or password was invalid. Please try again.
									</div>
									<div id='notification-reset' class='success'>
										You will receive an email with instructions on how to reset your password in a
										few minutes.
									</div>
									<div class='group'>
										<label for='login-email-field'>Email address</label>
										<input
											id='login-email-field'
											autofocus='autofocus'
											class='form-control input-hg'
											type='email'
											name='teachable_account[email]'
										/>
									</div>
									<div class='group'>
										<label for='login-password-field'>Password</label>
										<input
											id='login-password-field'
											autofocus='autofocus'
											class='form-control input-hg'
											type='password'
											name='teachable_account[password]'
										/>
									</div>
								</div>
								<div class='account-form-button-container'>
									<a id='login-final' class='orange-button btn'>
										Log in to Teachable
									</a>
									<div
										id='right-box-spinner'
										class='right-box-spinner log-in-form-spinner hidden'
									></div>
								</div>
								<div class='forgot-password'>
									<a href='/forgot-password'>Forgot password?</a>
								</div>
							</div>
						</div>
						<div class='box-footer full-width-box'>
							<h2>Don't have an account?</h2>
							<a href='/create-account'>Sign up</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
