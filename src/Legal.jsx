import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faShieldAlt, faUserShield, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import './App.css';
import LogoAndTextsvg from './svg_icons/LogoAndTextsvg.svg';

function Legal({ onBack, handleViewChange }) {
	return (
		<div className="baroque-bg">
		<nav className="baroque-nav">
			<div className="baroque-nav-brand" onClick={() => handleViewChange('gallery')} style={{ cursor: 'pointer' }}>
				<img src={LogoAndTextsvg} alt="Art Laundromat Logo" style={{ height: '52px', marginBottom: '4px' }} />
			</div>
			<div className="baroque-nav-links">
				<button className="baroque-nav-btn" onClick={() => handleViewChange('gallery')}>Home</button>
				<button className="baroque-nav-btn" onClick={() => handleViewChange('about')}>About</button>
				<button className="baroque-nav-btn" onClick={() => handleViewChange('contact')}>Contact</button>
				<button className="baroque-nav-btn">Legal</button>
			</div>
			<div className="baroque-nav-actions">
				<button className="baroque-auth-btn">Sign Up (Coming Soon)</button>
				<button className="baroque-auth-btn">Log In (Coming Soon)</button>
			</div>
		</nav>			<div className="baroque-page-content">
				<div className="baroque-page-header">
					<h1 className="baroque-page-title">Legal Information</h1>
					<div className="baroque-page-subtitle">Terms, Privacy & Copyright</div>
				</div>

				<div className="baroque-legal-sections">
					<div className="baroque-legal-section">
						<div className="baroque-legal-icon">
							<FontAwesomeIcon icon={faGavel} />
						</div>
						<h2>Terms of Service</h2>
						<div className="baroque-legal-content">
							<h3>1. Acceptance of Terms</h3>
							<p>
								By accessing and using Art Laundromat, you accept and agree to be bound by the terms 
								and provision of this agreement.
							</p>

							<h3>2. Use License</h3>
							<p>
								Permission is granted to temporarily view the materials on Art Laundromat for personal, 
								non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
							</p>

							<h3>3. Disclaimer</h3>
							<p>
								The materials on Art Laundromat are provided on an 'as is' basis. Art Laundromat makes 
								no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
							</p>

							<h3>4. Limitations</h3>
							<p>
								In no event shall Art Laundromat or its suppliers be liable for any damages arising 
								out of the use or inability to use the materials on Art Laundromat.
							</p>
						</div>
					</div>

					<div className="baroque-legal-section">
						<div className="baroque-legal-icon">
							<FontAwesomeIcon icon={faUserShield} />
						</div>
						<h2>Privacy Policy</h2>
						<div className="baroque-legal-content">
							<h3>Information We Collect</h3>
							<p>
								We collect information you provide directly to us, such as when you contact us through 
								our contact form or subscribe to our newsletter.
							</p>

							<h3>How We Use Your Information</h3>
							<p>
								We use the information we collect to respond to your inquiries, send you updates about 
								our gallery, and improve our services.
							</p>

							<h3>Information Sharing</h3>
							<p>
								We do not sell, trade, or otherwise transfer your personal information to third parties 
								without your consent, except as described in this policy.
							</p>

							<h3>Data Security</h3>
							<p>
								We implement appropriate security measures to protect your personal information against 
								unauthorized access, alteration, disclosure, or destruction.
							</p>
						</div>
					</div>

					<div className="baroque-legal-section">
						<div className="baroque-legal-icon">
							<FontAwesomeIcon icon={faCopyright} />
						</div>
						<h2>Copyright & Licensing</h2>
						<div className="baroque-legal-content">
							<h3>Artwork Copyright</h3>
							<p>
								All artwork displayed on Art Laundromat is protected by copyright law. The copyright 
								to each piece belongs to the respective artist unless otherwise stated.
							</p>

							<h3>Website Content</h3>
							<p>
								The design, layout, and content of this website are protected by copyright and other 
								intellectual property laws. All rights reserved.
							</p>

							<h3>Fair Use</h3>
							<p>
								Images may be viewed for personal, educational, or editorial purposes in accordance 
								with fair use provisions of copyright law.
							</p>

							<h3>Reproduction Rights</h3>
							<p>
								Any reproduction, modification, or commercial use of the artwork requires explicit 
								written permission from the copyright holder.
							</p>
						</div>
					</div>

					<div className="baroque-legal-section">
						<div className="baroque-legal-icon">
							<FontAwesomeIcon icon={faShieldAlt} />
						</div>
						<h2>Additional Information</h2>
						<div className="baroque-legal-content">
							<h3>Contact for Legal Matters</h3>
							<p>
								If you have any questions about these legal terms or need to report copyright 
								infringement, please contact us at legal@artlaundromat.com.
							</p>

							<h3>Updates to Legal Terms</h3>
							<p>
								We reserve the right to update these terms at any time. Continued use of the site 
								after changes constitutes acceptance of the new terms.
							</p>

							<h3>Governing Law</h3>
							<p>
								These terms are governed by the laws of the State of New York, United States, 
								without regard to conflict of law principles.
							</p>
						</div>
					</div>
				</div>

				<div className="baroque-legal-footer">
					<p>
						<strong>Last Updated:</strong> {new Date().toLocaleDateString()}
					</p>
					<p>
						For questions about these terms, please contact us using our <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>contact form</a>.
					</p>
				</div>
			</div>

			<Footer container className="baroque-footer-custom">
				<div className="w-full">
					<div className="w-full baroque-footer-top">
						<FooterBrand
							href="#"
							name="Art Laundromat"
							className="baroque-footer-brand"
						/>
						<FooterLinkGroup className="baroque-footer-links">
							<FooterLink href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="baroque-footer-link">Gallery</FooterLink>
							<FooterLink href="#" className="baroque-footer-link">About</FooterLink>
							<FooterLink href="#" className="baroque-footer-link">Contact</FooterLink>
							<FooterLink href="#" className="baroque-footer-link">Legal</FooterLink>
						</FooterLinkGroup>
					</div>
					<FooterDivider className="baroque-footer-divider" />
					<div className="baroque-footer-bottom">
						<FooterCopyright href="#" by=" GhostShell Systems LLC™ " year={new Date().getFullYear()} className="baroque-footer-copyright-text" />
					</div>
				</div>
			</Footer>
		</div>
	);
}

export default Legal;