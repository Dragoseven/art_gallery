import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPalette, faUsers, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import './App.css';

function About({ onBack }) {
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
					<h1 className="baroque-page-title">About Art Laundromat</h1>
					<div className="baroque-page-subtitle">Where Art Meets Passion</div>
				</div>

				<div className="baroque-page-grid">
					<div className="baroque-about-section">
						<div className="baroque-about-icon">
							<FontAwesomeIcon icon={faPalette} />
						</div>
						<h2>Our Mission</h2>
						<p>
							Art Laundromat is a curated digital gallery showcasing exceptional contemporary artwork 
							from talented artists around the world. We believe that art should be accessible to everyone, 
							and our platform provides a unique space where creativity flourishes and artistic vision comes to life.
						</p>
					</div>

					<div className="baroque-about-section">
						<div className="baroque-about-icon">
							<FontAwesomeIcon icon={faUsers} />
						</div>
						<h2>Our Roots</h2>
						<p>
							Art Laundromat was founded in 2025 by GhostShell Systems LLC™, a small team of passionate artists and technologists 
							who believe that art should be accessible to everyone. We are based in the United States and our mission is to 
							bring exceptional art to digital spaces. We are have Veteran roots and we are proud to support the veteran community.
							We are also proud to support the artist community and we are always looking for new and exciting artists to feature on our platform.
						</p>
					</div>

					<div className="baroque-about-section">
						<div className="baroque-about-icon">
							<FontAwesomeIcon icon={faHeart} />
						</div>
						<h2>Our Story</h2>
						<p>
							Founded with a passion for bringing exceptional art to digital spaces, Art Laundromat 
							represents a modern approach to art curation and presentation. We celebrate both traditional 
							techniques and contemporary innovation, creating a bridge between classic artistry and modern accessibility.
						</p>
					</div>
				</div>

				<div className="baroque-about-full-section">
					<h2>Experience Art Like Never Before</h2>
					<p>
						Our innovative gallery features an interactive carousel system that allows you to explore 
						multiple perspectives of each artwork. From detailed close-ups to full compositions, 
						we provide an immersive experience that brings you closer to the artist's vision.
					</p>
					<p>
						Whether you're an art enthusiast, collector, or simply someone who appreciates beauty, 
						Art Laundromat offers a carefully curated selection of pieces that span various styles, 
						techniques, and artistic expressions. Each piece tells a story, and we're here to help you discover it.
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

export default About;