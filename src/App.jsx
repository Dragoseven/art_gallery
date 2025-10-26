import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCartShopping, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import About from './About';
import Contact from './Contact';
import Legal from './Legal';
import './App.css';
import LogoAndTextsvg from './svg_icons/LogoAndTextsvg.svg';

const artPieces = [
	// Acrylic on Canvas
	{ imgs: ['8.JPG'], name: 'Color Dash Equestrian', artist: 'Adriana Codescu', medium: 'Acrylic on Canvas', dimensions: '30" × 40"', desc: 'A vibrant equestrian scene with dashing colors.' },
	
	// Graphite on Paper
	{ imgs: ['portrait5.JPG'], name: 'Brad Pitt', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A captivating portrait of Brad Pitt.' },
	{ imgs: ['portrait2.JPG'], name: 'Jung Ho-yeon - Squid Game', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A powerful portrait of Jung Ho-yeon from Squid Game.' },
	{ imgs: ['portrait4.JPG'], name: 'Leonardo DiCaprio', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A classic portrait of Leonardo DiCaprio.' },
	{ imgs: ['portrait1.JPG'], name: 'Marilyn Monroe', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'An iconic portrait of Marilyn Monroe.' },
	{ imgs: ['portrait3.JPG'], name: 'Prince', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A legendary portrait of the artist Prince.' },
	{ imgs: ['7.JPG'], name: 'Thoughts', artist: 'Maksim Sarkysian', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A contemplative piece titled "Thoughts" by Maksim Sarkysian.' },
	
	// Oil on Canvas
	{ imgs: ['12.JPG'], name: 'Leaf Life', artist: 'Adriana Codescu', medium: 'Oil on Canvas', dimensions: '16" × 20"', desc: 'A serene depiction of life through the lens of a leaf.' },
	
	// Oil on Wood Board
	{ imgs: ['16.JPG'], name: 'American Clown', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A colorful and whimsical portrait of an American clown.' },
	{ imgs: ['19.JPG'], name: 'Gorilla Joy', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A joyful gorilla captured in a moment of happiness.' },
	{ imgs: ['13.JPG'], name: 'Gorilla with Purse', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '20" × 30"', desc: 'A humorous portrait of a gorilla holding a purse.' },
	{ imgs: ['10.JPG'], name: 'Leonardo DiCaprio - Wolf of Wall Street', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Leonardo DiCaprio surrounded by cash from The Wolf of Wall Street.' },
	{ imgs: ['14.JPG'], name: 'Louie V Raven', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '18" × 24"', desc: 'A stylish raven with Louis Vuitton flair.' },
	{ imgs: ['20.JPG'], name: 'Maple Syrup', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '16" × 20"', desc: 'A sweet and delicious depiction of maple syrup.' },
	{ imgs: ['15.JPG'], name: 'Retired Batman', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Batman in his later years, retired but still heroic.' },
	
	// Oil on Wood Board, Varnish
	{ imgs: ['11.JPG'], name: 'Cat Stare', artist: 'Alex Petrescu', medium: 'Oil on Wood Board, Varnish', dimensions: '16" × 20"', desc: 'An intense and mesmerizing cat stare.' },
	
	// Watercolor on Dollar Bill
	{ imgs: ['21.JPG'], name: 'Baby Yoda Bill', artist: 'Alex Petrescu', medium: 'Watercolor on Dollar Bill', dimensions: '18" × 24"', desc: 'An adorable portrait of Baby Yoda.' },
	{ imgs: ['22.JPG'], name: 'Mario Bill', artist: 'Alex Petrescu', medium: 'Watercolor on Dollar Bill', dimensions: '18" × 24"', desc: "A playful portrait of Mario's Bullet Bill." },
	
	// Watercolor on Textured Paper
	{ imgs: ['1.JPG'], name: "Anya Taylor-Joy - The Queen's Gambit", artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '20" × 30"', desc: "Another captivating portrait from The Queen's Gambit series." },
	{ imgs: ['2.JPG'], name: 'Blonde Girl with Goggles', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '20" × 30"', desc: 'Another perspective of the blonde girl with goggles.' },
	{ imgs: ['6.JPG'], name: 'Dead Cyborg Insect', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '18" × 24"', desc: 'A surreal depiction of a dead cyborg insect.' },
	{ imgs: ['3.JPG'], name: 'Penguin - Batman', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '24" × 36"', desc: "Another menacing portrait of Batman's Penguin." },
	{ imgs: ['4.JPG'], name: 'Zendaya - Dune', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '24" × 36"', desc: 'A stunning portrait of Zendaya from Dune.' },
];


function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [selected, setSelected] = useState(null);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState('gallery'); // 'gallery', 'about', 'contact', 'legal'
	// Track current image index for each card
	const [cardImageIndexes, setCardImageIndexes] = useState(
		artPieces.map(() => 0)
	);
	// Pagination
	const ITEMS_PER_PAGE = 12;
	const [currentGalleryPage, setCurrentGalleryPage] = useState(1);
	const totalPages = Math.ceil(artPieces.length / ITEMS_PER_PAGE);

// Responsive columns: 4 desktop, 2 medium, 1 mobile
	let columns = 4;
	if (window.innerWidth <= 1200) columns = 2;
	if (window.innerWidth <= 600) columns = 1;

	const handleViewChange = (page) => {
		setCurrentPage(page);
		setMenuOpen(false);
	};

	const handleBackToGallery = () => {
		setCurrentPage('gallery');
	};

	const handleCardImageChange = (cardIndex, direction) => {
		setCardImageIndexes(prev => {
			const newIndexes = [...prev];
			const currentIndex = newIndexes[cardIndex];
			const maxIndex = artPieces[cardIndex].imgs.length - 1;
			
			if (direction === 'next') {
				newIndexes[cardIndex] = currentIndex === maxIndex ? 0 : currentIndex + 1;
			} else {
				newIndexes[cardIndex] = currentIndex === 0 ? maxIndex : currentIndex - 1;
			}
			
			return newIndexes;
		});
	};

	const handleModalImageChange = (direction) => {
		const maxIndex = artPieces[selected].imgs.length - 1;
		
		if (direction === 'next') {
			setSelectedImageIndex(prev => prev === maxIndex ? 0 : prev + 1);
		} else {
			setSelectedImageIndex(prev => prev === 0 ? maxIndex : prev - 1);
		}
	};

	const openModal = (cardIndex) => {
		setSelected(cardIndex);
		setSelectedImageIndex(cardImageIndexes[cardIndex]);
	};

	// Pagination handlers
	const handlePageChange = (page) => {
		setCurrentGalleryPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// Get current page items
	const getCurrentPageItems = () => {
		const startIndex = (currentGalleryPage - 1) * ITEMS_PER_PAGE;
		const endIndex = startIndex + ITEMS_PER_PAGE;
		return artPieces.slice(startIndex, endIndex);
	};

	// Check if painting is landscape (wider than tall)
	const isLandscape = (dimensions) => {
		// Extract numbers from dimensions string - handles "16"H × 12"W" format
		const hwMatch = dimensions.match(/(\d+(?:\.\d+)?)"H\s*[×x]\s*(\d+(?:\.\d+)?)"W/i);
		if (hwMatch) {
			const height = parseFloat(hwMatch[1]);
			const width = parseFloat(hwMatch[2]);
			return width > height;
		}
		
		// Handle standard format like "24" × 36""
		const match = dimensions.match(/(\d+(?:\.\d+)?)"\s*[×x]\s*(\d+(?:\.\d+)?)"/i);
		if (!match) return false;
		const width = parseFloat(match[1]);
		const height = parseFloat(match[2]);
		return width > height;
	};

	// Page routing logic
	if (currentPage === 'about') {
		return <About onBack={handleBackToGallery} />;
	}
	if (currentPage === 'contact') {
		return <Contact onBack={handleBackToGallery} />;
	}
	if (currentPage === 'legal') {
		return <Legal onBack={handleBackToGallery} />;
	}

return (
<React.Fragment>
<div className="baroque-bg">
<nav className="baroque-nav">
<div className="baroque-nav-brand">
	<img src={LogoAndTextsvg} alt="Art Laundromat Logo" style={{ height: '52px', marginBottom: '4px' }} />
</div>
		<div className="baroque-nav-links">
			<span className="baroque-nav-link-item" onClick={() => handleViewChange('gallery')}>Home</span>
			<span className="baroque-nav-link-item" onClick={() => handleViewChange('about')}>About</span>
			<span className="baroque-nav-link-item" onClick={() => handleViewChange('contact')}>Contact</span>
			<span className="baroque-nav-link-item" onClick={() => handleViewChange('legal')}>Legal</span>
		</div>
		<div className="baroque-nav-icons">
			<button
				className="baroque-menu-btn"
				title="Menu"
				style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
				// onClick={() => setMenuOpen((open) => !open)}
			>
				<FontAwesomeIcon icon={faBook} style={{ fontSize: '2.2rem', color: '#fffbe9', filter: 'drop-shadow(0 0 3px #7c6a4a)' }} />
			</button>
			<button
				className="baroque-menu-btn"
				title="Cart"
				style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
			>
				<FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '2.2rem', color: '#fffbe9', filter: 'drop-shadow(0 0 3px #7c6a4a)' }} />
			</button>
		</div>
{/*
{menuOpen && (
<div className="baroque-menu-dropdown">
<button className="baroque-menu-item" onClick={() => handlePageChange('gallery')}>Home</button>
<button className="baroque-menu-item" onClick={() => handlePageChange('about')}>About</button>
<button className="baroque-menu-item" onClick={() => handlePageChange('contact')}>Contact</button>
<button className="baroque-menu-item" onClick={() => handlePageChange('legal')}>Legal</button>
</div>
)}
*/}
</nav>
<section
	className="baroque-gallery"
	style={{
		display: 'grid',
		gridTemplateColumns: `repeat(${columns}, 1fr)`,
		gap: '40px 32px',
	}}
>
		{getCurrentPageItems().map((piece, idx) => {
			const originalIndex = (currentGalleryPage - 1) * ITEMS_PER_PAGE + idx;
			const landscape = isLandscape(piece.dimensions);
			return (
			<React.Fragment key={originalIndex}>
				<div 
					className="baroque-card" 
					style={{ 
						cursor: 'pointer', 
						position: 'relative',
						gridColumn: landscape && columns >= 3 ? 'span 2' : 'span 1'
					}}
				>
				<div
					className="baroque-img-container"
					style={{ 
						position: 'relative', 
						overflow: 'visible',
						minHeight: landscape ? '600px' : 'auto'
					}}
					onClick={() => openModal(originalIndex)}
				>
					<img
						src={piece.imgs[cardImageIndexes[originalIndex]]}
						alt={piece.name}
						className="baroque-img"
					/>
					{/* Image navigation for cards with multiple images */}
					{piece.imgs.length > 1 && (
						<>
							<button
								className="baroque-card-nav baroque-card-nav-prev"
								onClick={(e) => {
									e.stopPropagation();
									handleCardImageChange(originalIndex, 'prev');
								}}
								title="Previous image"
							>
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<button
								className="baroque-card-nav baroque-card-nav-next"
								onClick={(e) => {
									e.stopPropagation();
									handleCardImageChange(originalIndex, 'next');
								}}
								title="Next image"
							>
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
							{/* Image indicators */}
							<div className="baroque-card-indicators">
								{piece.imgs.map((_, imgIdx) => (
									<div
										key={imgIdx}
										className={`baroque-card-indicator ${
											imgIdx === cardImageIndexes[originalIndex] ? 'active' : ''
										}`}
										onClick={(e) => {
											e.stopPropagation();
											setCardImageIndexes(prev => {
												const newIndexes = [...prev];
												newIndexes[originalIndex] = imgIdx;
												return newIndexes;
											});
										}}
									/>
								))}
							</div>
						</>
					)}
					</div>
					<div className="baroque-info">
						<div className="baroque-name">{piece.name}</div>
						<div className="baroque-artist">{piece.artist}</div>
						<div className="baroque-medium">{piece.medium}</div>
					</div>
				</div>
			</React.Fragment>
		);
		})}
</section>

{/* Pagination Controls */}
{totalPages > 1 && (
	<div className="baroque-pagination">
		<button 
			className="baroque-pagination-btn"
			onClick={() => handlePageChange(currentGalleryPage - 1)}
			disabled={currentGalleryPage === 1}
		>
			Previous
		</button>
		<span className="baroque-pagination-info">
			Page {currentGalleryPage} of {totalPages}
		</span>
		<button 
			className="baroque-pagination-btn"
			onClick={() => handlePageChange(currentGalleryPage + 1)}
			disabled={currentGalleryPage === totalPages}
		>
			Next
		</button>
	</div>
)}

{/* Footer Section */}

<Footer container className="baroque-footer-custom">
<div className="w-full">
<div className="w-full baroque-footer-top">
<FooterBrand
href="/"
name="Art Laundromat"
className="baroque-footer-brand"
/>
<FooterLinkGroup className="baroque-footer-links">
<FooterLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange('about'); }} className="baroque-footer-link">About</FooterLink>
<FooterLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange('legal'); }} className="baroque-footer-link">Privacy Policy</FooterLink>
<FooterLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange('legal'); }} className="baroque-footer-link">Licensing</FooterLink>
<FooterLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange('contact'); }} className="baroque-footer-link">Contact</FooterLink>


</FooterLinkGroup>
</div>

<FooterDivider className="baroque-footer-divider" />
<div className="baroque-footer-bottom">
<FooterCopyright href="#" by=" GhostShell Systems LLC™ " year={new Date().getFullYear()} className="baroque-footer-copyright-text" />
</div>

</div>
</Footer>



{selected !== null && (
<React.Fragment>
<div
className="baroque-overlay"
onClick={() => setSelected(null)}
/>
<div className="baroque-slide-panel">
<button
className="baroque-close-btn"
onClick={() => setSelected(null)}
title="Close"
>
&times;
</button>
<div className="baroque-slide-img-container" style={{ position: 'relative' }}>
							<img
								className="baroque-slide-img"
								src={artPieces[selected].imgs[selectedImageIndex]}
								alt={artPieces[selected].name}
							/>
							
							{/* Modal navigation for multiple images */}
							{artPieces[selected].imgs.length > 1 && (
								<>
									<button
										className="baroque-modal-nav baroque-modal-nav-prev"
										onClick={() => handleModalImageChange('prev')}
										title="Previous image"
									>
										<FontAwesomeIcon icon={faChevronLeft} />
									</button>
									<button
										className="baroque-modal-nav baroque-modal-nav-next"
										onClick={() => handleModalImageChange('next')}
										title="Next image"
									>
										<FontAwesomeIcon icon={faChevronRight} />
									</button>
									
									{/* Image indicators for modal */}
									<div className="baroque-modal-indicators">
										{artPieces[selected].imgs.map((_, imgIdx) => (
											<div
												key={imgIdx}
												className={`baroque-modal-indicator ${
													imgIdx === selectedImageIndex ? 'active' : ''
												}`}
												onClick={() => setSelectedImageIndex(imgIdx)}
											/>
										))}
									</div>
								</>
							)}
						</div>
<div className="baroque-slide-title">
{artPieces[selected].name}
</div>
<div className="baroque-slide-desc">
{artPieces[selected].desc}
</div>
<div className="baroque-slide-artist">
  Artist: {artPieces[selected].artist}
</div>
<div className="baroque-slide-medium">
  Medium: {artPieces[selected].medium}
</div>
<div className="baroque-slide-dimensions">
  Dimensions: {artPieces[selected].dimensions}
</div>
</div>
</React.Fragment>
)}
</div>
</React.Fragment>
);
}

export default App;
