import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import './App.css';

function Contact({ onBack }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would typically send the form data to your backend
		alert(`Thank you ${formData.name}! Your message has been sent. We'll get back to you soon.`);
		setFormData({ name: '', email: '', subject: '', message: '' });
	};

	return (
		<div className="baroque-bg">
			<nav className="baroque-nav">
				<div className="baroque-nav-brand">
					<div className="baroque-nav-title">Art Laundromat</div>
				</div>
				<div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginRight: '32px' }}>
					<button
						className="baroque-menu-btn"
						title="Back to Gallery"
						style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
						onClick={onBack}
					>
						<FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '2.2rem', color: '#fffbe9', filter: 'drop-shadow(0 0 3px #7c6a4a)' }} />
					</button>
				</div>
			</nav>

			<div className="baroque-page-content">
				<div className="baroque-page-header">
					<h1 className="baroque-page-title">Contact Us</h1>
					<div className="baroque-page-subtitle">Get in Touch</div>
				</div>

				<div className="baroque-contact-grid">
					<div className="baroque-contact-info">
						<h2>Reach Out to Us</h2>
						<p>
							We'd love to hear from you! Whether you're interested in purchasing artwork, 
							commissioning a piece, or just want to learn more about our artists and gallery.
						</p>

						<div className="baroque-contact-methods">
							<div className="baroque-contact-item">
								<FontAwesomeIcon icon={faEnvelope} className="baroque-contact-icon" />
								<div>
									<h3>Email</h3>
									<p>dragos@artlaundromat.com</p>
								</div>
							</div>

							<div className="baroque-contact-item">
								<FontAwesomeIcon icon={faPhone} className="baroque-contact-icon" />
								<div>
									<h3>Phone</h3>
									<p>+1 (555) 123-4567</p>
								</div>
							</div>

							<div className="baroque-contact-item">
								<FontAwesomeIcon icon={faMapMarkerAlt} className="baroque-contact-icon" />
								<div>
									<h3>Location</h3>
									<p>New York, NY<br />United States</p>
								</div>
							</div>
						</div>
					</div>

					<div className="baroque-contact-form-container">
						<h2>Send us a Message</h2>
						<form onSubmit={handleSubmit} className="baroque-contact-form">
							<div className="baroque-form-group">
								<label htmlFor="name">Full Name</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
									className="baroque-form-input"
								/>
							</div>

							<div className="baroque-form-group">
								<label htmlFor="email">Email Address</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
									className="baroque-form-input"
								/>
							</div>

							<div className="baroque-form-group">
								<label htmlFor="subject">Subject</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									required
									className="baroque-form-input"
								/>
							</div>

							<div className="baroque-form-group">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									required
									rows="5"
									className="baroque-form-input baroque-form-textarea"
								></textarea>
							</div>

							<button type="submit" className="baroque-submit-btn">
								<FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '8px' }} />
								Send Message
							</button>
						</form>
					</div>
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
						<FooterCopyright href="#" by="Dragos Petrescu™" year={new Date().getFullYear()} className="baroque-footer-copyright-text" />
					</div>
					<div className="baroque-footer-date">
						{new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()}
					</div>
				</div>
			</Footer>
		</div>
	);
}

export default Contact;