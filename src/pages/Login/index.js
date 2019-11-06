import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
	return (
		<section className='login-form account-form'>
			<div className='form-aligner'>
				<div className='inner-box'>
					<div className='top-box'>
						<div className='top-box-text'>
							<h1>Log in to Teachable</h1>
						</div>
					</div>
					<div className='left-box'>
						<h1>Log in to Teachable</h1>
						<img
							alt='Login background'
							src='https://s3-us-west-2.amazonaws.com/static-css-assets/bg/background-school-signup.svg'
						/>
					</div>
					<div className='right-box'>
						<br />
						<div className='row'>
							<div className='col-sm-10 col-sm-offset-1'>
								<div id='login-fields' className='fields'>
									<div id='error-invalid-email' className='error'>
										Please enter a valid email address.
									</div>
									<div id='error-password' className='error'>
										Please enter a password which is at least six characters.
									</div>
									<div id='error-server' className='error'>
										Your email or password was invalid. Please try again.
									</div>
									<div id='notification-reset' className='success'>
										You will receive an email with instructions on how to reset your password in a
										few minutes.
									</div>
									<div className='group'>
										<label htmlFor='login-email-field'>Email address</label>
										<input
											id='login-email-field'
											autoFocus={true}
											className='form-control input-hg'
											type='email'
											name='teachable_account[email]'
										/>
									</div>
									<div className='group'>
										<label htmlFor='login-password-field'>Password</label>
										<input
											id='login-password-field'
											className='form-control input-hg'
											type='password'
											name='teachable_account[password]'
										/>
									</div>
								</div>
								<div className='account-form-button-container'>
									{/* eslint-disable-next-line */}
									<a id='login-final' className='orange-button btn'>
										Log in to Teachable
									</a>
									<div
										id='right-box-spinner'
										className='right-box-spinner log-in-form-spinner hidden'
									></div>
								</div>
								<div className='forgot-password'>
									<a href='/forgot-password'>Forgot password?</a>
								</div>
							</div>
						</div>
						<div className='box-footer full-width-box'>
							<h2>Don't have an account?</h2>
							<Link to='/signup' className='log-in'>
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
