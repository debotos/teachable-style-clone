import React from 'react'

import teachableLogoOrange from '../assets/teachable-logo-orange.svg'
import instagramIcon from '../assets/instagram_icon.svg'
import pinterestIcon from '../assets/pinterest_icon.png'
import twitterIcon from '../assets/twitter_icon.png'
import facebookIcon from '../assets/facebook_icon.png'

export default function Footer() {
	return (
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-2 first-section'>
						<ul className='new-homepage-footer-links'>
							<h4>Product</h4>
							<li>
								<a href='/examples'>Examples</a>
							</li>
							<li>
								<a href='/features'>Features</a>
							</li>
							<li>
								<a href='/pricing'>Pricing</a>
							</li>
						</ul>
					</div>
					<div className='col-sm-2 second-section'>
						<ul className='new-homepage-footer-links'>
							<h4>Learn</h4>
							<li>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://teachable.zendesk.com/hc/en-us'
								>
									Knowledge Base
								</a>
							</li>
							<li>
								<a target='_blank' rel='noopener noreferrer' href='https://teachable.com/blog'>
									Blog
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://teachable.com/podcast/everything-is-teachable'
								>
									Podcast
								</a>
							</li>
						</ul>
					</div>
					<div className='col-sm-2 third-section'>
						<ul className='new-homepage-footer-links'>
							<h4>Company</h4>
							<li>
								<a href='/careers'>Careers</a>
							</li>
							<li>
								<a href='/experts'>Experts</a>
							</li>
							<li>
								<a href='/affiliates'>Become an affiliate</a>
							</li>
							<li className='discover-link-footer'>
								<a href='https://discover.teachable.com?src=teachable.com'>Discover</a>
								<span className='discover-beta-badge'>Beta</span>
							</li>
						</ul>
					</div>
					<div className='col-sm-3'>
						<ul className='new-homepage-footer-links'>
							<h4>Legal</h4>
							<li>
								<a href='/privacy-policy'>Privacy Policy</a>
							</li>
							<li>
								<a href='/terms-of-use'>Terms of Use</a>
							</li>
						</ul>
					</div>
					<div className='col-sm-3'>
						<ul className='new-homepage-footer-links'>
							<h4>Get in touch</h4>
							<li>
								<a href='/cdn-cgi/l/email-protection#6c1f191c1c031e182c18090d0f040d0e0009420f0301'>
									Contact Support
								</a>
							</li>
							<li>
								<a href='https://teachable.typeform.com/to/TF9BPU'>Contact Sales</a>
							</li>
							<li className='social-icons'>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='social-icon'
									href='https://www.facebook.com/teachableHQ/'
								>
									<img alt='Facebook page' src={facebookIcon} width='32px' />
								</a>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='social-icon'
									href='https://twitter.com/teachable'
								>
									<img alt='Twitter page' src={twitterIcon} width='32px' />
								</a>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='social-icon'
									href='https://www.pinterest.com/teachablehq/'
								>
									<img alt='Pinterest page' src={pinterestIcon} width='32px' />
								</a>
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='social-icon'
									href='https://www.instagram.com/teachable/'
								>
									<img alt='Instagram page' src={instagramIcon} width='32px' />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-12 new-homepage-footer-logo padding'>
						<a href='/'>
							<img alt='' src={teachableLogoOrange} className='new-homepage-footer-logo' />
						</a>
						<span>All rights reserved Teachable&trade; 2019</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
