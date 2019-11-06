import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export default function Navigation() {
	const [nav, toggleNav] = useState(false)

	return (
		<section className='_1 clearfix transparent nav-menu'>
			<div className='container'>
				<div className='row'>
					<a className='create-course' href='/create-account'>
						Create a course
					</a>
					<a className='teachable-logo' href='/' title='Teachable - Create a Course'>
						{' '}
					</a>
					<Link to='/login' className='log-in'>
						Log in
					</Link>
					<button type='button' className='navbar-toggle' onClick={() => toggleNav(!nav)}>
						<span className='icon-bar'></span>
						<span className='icon-bar'></span>
						<span className='icon-bar'></span>
					</button>
					<div className={`navbar-collapse collapse${nav ? ' in' : ''}`}>
						<ul>
							<li className='dropdown-only'>
								<a href='/create-account'>Create a course</a>
							</li>
							<li className='dropdown-only'>
								<a href='/login'>Log In</a>
							</li>
							<li>
								<a href='/features'>Features</a>
							</li>
							<li>
								<a href='/pricing'>Pricing</a>
							</li>
							<li>
								<a href='/examples'>Examples</a>
							</li>
							<li>
								<a href='/blog'>Blog</a>
							</li>
							<li>
								<a href='/blog/resources'>Resources</a>
							</li>
						</ul>
						<div className='discover-cta'>
							<a
								className='discover-cta-link'
								href='https://discover.teachable.com?src=teachable.com'
							>
								Looking to enroll in one of our Creators' courses? Go here
								<svg width='12' height='12' viewBox='0 0 23 23' xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M22 0H16.4142C15.5233 0 15.0771 1.07714 15.7071 1.7071L17.4774 3.4774L9.9887 10.9661C9.43018 11.5246 9.43018 12.4302 9.9887 12.9887C10.5472 13.5472 11.4528 13.5472 12.0113 12.9887L19.5 5.5L21.2929 7.29289C21.9229 7.92286 23 7.47669 23 6.58579V1C23 0.447715 22.5523 0 22 0ZM4.58333 3.75H11V1H4.58333C2.05203 1 0 3.05203 0 5.58333V18.4167C0 20.948 2.05203 23 4.58333 23H17.4167C19.948 23 22 20.948 22 18.4167V12H19.25V18.4167C19.25 19.4292 18.4292 20.25 17.4167 20.25H4.58333C3.57081 20.25 2.75 19.4292 2.75 18.4167V5.58333C2.75 4.57081 3.57081 3.75 4.58333 3.75Z'
									></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
