import React from 'react'

import './style.scss'

export default function Hero() {
	return (
		<section className='hero-partial _2'>
			<div id='segment-event' type='hidden' value='Submit Home Page Hero Form'></div>
			<div
				className='hero-div'
				style={{
					backgroundImage:
						'url(https://process.filestackapi.com/AtM7HNKzQZ6u2HxwJF1Jiz/auto_image/compress/quality=value:90/G7BzHkYjRLmY5D6Ji6VP)'
				}}
			>
				<div className='container hero-container'>
					<div className='row'>
						<div className='col-xs-12 vertically-align-contents-except-xs'>
							<div className='hero-text hero-text-left'>
								<h1>Create and sell beautiful online courses</h1>
								<h2>
									Your skills and experiences are unique and valuable. Easily build a beautiful
									course website, share your knowledge, and be rewarded for it.
								</h2>
								<div className='input-container left'>
									<div className='hidden redirect'>/create-account</div>
									<div className='hidden iterable-event'></div>
									<div className='hidden iterable-campaign'></div>
									<input
										id='email-input'
										type='email'
										autoFocus='autofocus'
										placeholder='Email address'
									/>
									<button id='email-submit-button' className='orange-button'>
										Get started
									</button>
									<div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
