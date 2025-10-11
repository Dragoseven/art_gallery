import React, { useState } from 'react';
import LikeIcon from './svg_icons/heart.svg?react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCartShopping, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import About from './About';
import Contact from './Contact';
import Legal from './Legal';
import './App.css';

const artPieces = [
	// Acrylic on Canvas
	{ imgs: ['Color Dash Equestrian.jpg','8.JPG','9.JPG'], name: 'Color Dash Equestrian', artist: 'Adriana Codescu', medium: 'Acrylic on Canvas', dimensions: '30" × 40"', desc: 'A vibrant equestrian scene with dashing colors.' },
	
	// Graphite on Paper
	{ imgs: ['Brad Pitt.jpg', 'portrait5.JPG'], name: 'Brad Pitt', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A captivating portrait of Brad Pitt.' },
	{ imgs: ['Jung Ho-yeon - Squid Game.jpg','portrait2.JPG'], name: 'Jung Ho-yeon - Squid Game', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A powerful portrait of Jung Ho-yeon from Squid Game.' },
	{ imgs: ['Leonardo Dicaprio.jpg','portrait4.JPG'], name: 'Leonardo DiCaprio', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A classic portrait of Leonardo DiCaprio.' },
	{ imgs: ['Marylin Monroe.jpg','portrait1.JPG'], name: 'Marilyn Monroe', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'An iconic portrait of Marilyn Monroe.' },
	{ imgs: ['Prince.jpg','portrait3.JPG'], name: 'Prince', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A legendary portrait of the artist Prince.' },
	{ imgs: ['Thoughts - Maksim Sarkysian.jpg','7.JPG'], name: 'Thoughts', artist: 'Maksim Sarkysian', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A contemplative piece titled "Thoughts" by Maksim Sarkysian.' },
	
	// Oil on Canvas
	{ imgs: ['Leaf Life.jpg','12.JPG','121.JPG'], name: 'Leaf Life', artist: 'Adriana Codescu', medium: 'Oil on Canvas', dimensions: '16" × 20"', desc: 'A serene depiction of life through the lens of a leaf.' },
	
	// Oil on Wood Board
	{ imgs: ['American Clown2.jpg','16.JPG','17.JPG','18.JPG'], name: 'American Clown', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A colorful and whimsical portrait of an American clown.' },
	{ imgs: ['Gorilla Joy.jpg','19.JPG'], name: 'Gorilla Joy', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A joyful gorilla captured in a moment of happiness.' },
	{ imgs: ['Gorilla with Purse.jpg','13.JPG'], name: 'Gorilla with Purse', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '20" × 30"', desc: 'A humorous portrait of a gorilla holding a purse.' },
	{ imgs: ['Leonardo Dicaprio - Wolf of Wall Street - Cash.jpg','10.JPG'], name: 'Leonardo DiCaprio - Wolf of Wall Street', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Leonardo DiCaprio surrounded by cash from The Wolf of Wall Street.' },
	{ imgs: ['Louie V Raven2.jpg','14.JPG'], name: 'Louie V Raven', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '18" × 24"', desc: 'A stylish raven with Louis Vuitton flair.' },
	{ imgs: ['Maple Syrup.jpg','20.JPG'], name: 'Maple Syrup', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '16" × 20"', desc: 'A sweet and delicious depiction of maple syrup.' },
	{ imgs: ['Retired Batman2.jpg','15.JPG'], name: 'Retired Batman', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Batman in his later years, retired but still heroic.' },
	
	// Oil on Wood Board, Varnish
	{ imgs: ['Cat Stare.jpg','11.JPG','111.JPG'], name: 'Cat Stare', artist: 'Alex Petrescu', medium: 'Oil on Wood Board, Varnish', dimensions: '16" × 20"', desc: 'An intense and mesmerizing cat stare.' },
	
	// Watercolor on Dollar Bill
	{ imgs: ['Baby Yoda Bill.jpg','21.JPG'], name: 'Baby Yoda Bill', artist: 'Alex Petrescu', medium: 'Watercolor on Dollar Bill', dimensions: '18" × 24"', desc: 'An adorable portrait of Baby Yoda.' },
	{ imgs: ['Mario Bill.jpg','22.JPG'], name: 'Mario Bill', artist: 'Alex Petrescu', medium: 'Watercolor on Dollar Bill', dimensions: '18" × 24"', desc: "A playful portrait of Mario's Bullet Bill." },
	
	// Watercolor on Textured Paper
	{ imgs: ['Anya Taylor-Joy - The Queen\'s Gambit2.jpg','1.JPG'], name: "Anya Taylor-Joy - The Queen's Gambit", artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '20" × 30"', desc: "Another captivating portrait from The Queen's Gambit series." },
	{ imgs: ['Blonde Girl with Goggles2.jpg','2.JPG'], name: 'Blonde Girl with Goggles', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '20" × 30"', desc: 'Another perspective of the blonde girl with goggles.' },
	{ imgs: ['Dead Cyborg Insect.jpg','6.JPG'], name: 'Dead Cyborg Insect', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '18" × 24"', desc: 'A surreal depiction of a dead cyborg insect.' },
	{ imgs: ['Penguin - Batman2.jpg','3.JPG'], name: 'Penguin - Batman', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '24" × 36"', desc: "Another menacing portrait of Batman's Penguin." },
	{ imgs: ['Zendaya - Dune.jpg','4.JPG'], name: 'Zendaya - Dune', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '24" × 36"', desc: 'A stunning portrait of Zendaya from Dune.' },
];


function App() {
	const [showTopArrow, setShowTopArrow] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [selected, setSelected] = useState(null);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState('gallery'); // 'gallery', 'about', 'contact', 'legal'
	// Track current image index for each card
	const [cardImageIndexes, setCardImageIndexes] = useState(
		artPieces.map(() => 0)
	);
	// For lazy loading art pieces
	const INITIAL_COUNT = 9;
	const LOAD_MORE_COUNT = 6;
	const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
	const loaderRef = React.useRef(null);
	// Like state for each art piece
	const [likes, setLikes] = useState(Array(artPieces.length).fill(0));
	// Track if user has liked each painting (per session)
	const [userLiked, setUserLiked] = useState(Array(artPieces.length).fill(false));

	const handleLike = (idx) => {
		if (!userLiked[idx]) {
			setLikes(prev => prev.map((val, i) => i === idx ? val + 1 : val));
			setUserLiked(prev => prev.map((val, i) => i === idx ? true : val));
		} else {
			setLikes(prev => prev.map((val, i) => i === idx ? Math.max(val - 1, 0) : val));
			setUserLiked(prev => prev.map((val, i) => i === idx ? false : val));
		}
	};

	React.useEffect(() => {
		const handleScroll = () => {
			setShowTopArrow(window.pageYOffset > 10);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

// Responsive columns: 3 desktop, 2 medium, 1 mobile
	let columns = 2;
	if (window.innerWidth <= 900) columns = 2;
	if (window.innerWidth <= 600) columns = 1;

	const handlePageChange = (page) => {
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

	// Infinite scroll effect
	React.useEffect(() => {
		if (visibleCount >= artPieces.length) return;
		const observer = new window.IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, artPieces.length));
				}
			},
			{ threshold: 1 }
		);
		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}
		return () => {
			if (loaderRef.current) observer.unobserve(loaderRef.current);
		};
	}, [visibleCount, artPieces.length]);

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
	<div className="baroque-nav-title">Art Laundromat</div>
	<div style={{ fontSize: '1.1rem', color: '#fffbe9', fontWeight: 400, marginTop: 2 }}>
		Collection - {artPieces.length} Pieces
	</div>
</div>
<div style={{ display: 'flex', flexDirection: 'row', gap: '32px', alignItems: 'center', marginRight: '32px' }}>
	<span style={{ color: '#fffbe9', fontSize: '1.1rem', cursor: 'pointer' }} onClick={() => handlePageChange('gallery')}>Home</span>
	<span style={{ color: '#fffbe9', fontSize: '1.1rem', cursor: 'pointer' }} onClick={() => handlePageChange('about')}>About</span>
	<span style={{ color: '#fffbe9', fontSize: '1.1rem', cursor: 'pointer' }} onClick={() => handlePageChange('contact')}>Contact</span>
	<span style={{ color: '#fffbe9', fontSize: '1.1rem', cursor: 'pointer' }} onClick={() => handlePageChange('legal')}>Legal</span>
	{/* Menu and Cart icons remain */}
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
		{artPieces.slice(0, visibleCount).map((piece, idx) => (
			<React.Fragment key={idx}>
				<div className="baroque-card" style={{ cursor: 'pointer', position: 'relative' }}>
					<div
						className="baroque-img-container"
						style={{ position: 'relative', overflow: 'hidden' }}
						onClick={() => openModal(idx)}
					>
						<img
							src={piece.imgs[cardImageIndexes[idx]]}
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
										handleCardImageChange(idx, 'prev');
									}}
									title="Previous image"
								>
									<FontAwesomeIcon icon={faChevronLeft} />
								</button>
								<button
									className="baroque-card-nav baroque-card-nav-next"
									onClick={(e) => {
										e.stopPropagation();
										handleCardImageChange(idx, 'next');
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
												imgIdx === cardImageIndexes[idx] ? 'active' : ''
											}`}
											onClick={(e) => {
												e.stopPropagation();
												setCardImageIndexes(prev => {
													const newIndexes = [...prev];
													newIndexes[idx] = imgIdx;
													return newIndexes;
												});
											}}
										/>
									))}
								</div>
							</>
						)}
					</div>
					{/* Like UI (one like per user per painting) */}
					<div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '8px 0 0 0', justifyContent: 'center' }}>
						<button
							onClick={(e) => { e.stopPropagation(); handleLike(idx); }}
							title={userLiked[idx] ? 'Retract like' : 'Like'}
							style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', opacity: 1 }}
						>
							<LikeIcon style={{ width: 28, height: 28, marginRight: 4, color: userLiked[idx] ? 'red' : '#aaa' }} />
							<span style={{ fontWeight: 600, color: '#1C274C' }}>{likes[idx]}</span>
						</button>
					</div>
					<div className="baroque-info">
						<div className="baroque-name">{piece.name}</div>
						<div className="baroque-artist">{piece.artist}</div>
					</div>
				</div>
			</React.Fragment>
		))}
</section>

{/* Infinite scroll loader */}
{visibleCount < artPieces.length && (
	<div ref={loaderRef} style={{ height: 40, textAlign: 'center', margin: '32px 0', color: '#7c6a4a', fontSize: '1.2rem' }}>
		Loading more art...
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
{/* Always show the back-to-top arrow */}
<button
className="baroque-top-arrow"
onClick={() => {
// Simple smooth scroll with duration control
const duration = 500; // 0.5 second (faster scroll)
const start = window.pageYOffset;
const startTime = performance.now();

const animateScroll = (currentTime) => {
const timeElapsed = currentTime - startTime;
const progress = Math.min(timeElapsed / duration, 1);

// Easing function for smooth animation
const ease = 1 - Math.pow(1 - progress, 3);
const position = start * (1 - ease);

window.scrollTo(0, position);

if (progress < 1) {
requestAnimationFrame(animateScroll);
} else {
window.scrollTo(0, 0); // Ensure we end exactly at top
}
};

requestAnimationFrame(animateScroll);
}}
title="Back to top"
>
<svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 128 128" style={{ width: 48, height: 48 }} xmlSpace="preserve">
	{/* Rounded rectangle background for rounded viewbox effect */}
	<rect x="4" y="4" width="120" height="120" rx="50" fill="#fff" stroke="#0A0A0A" strokeWidth="4" />
	<g id="row2_1_">
		<g id="_x34__3_">
			<g id="up">
				<g>
					<path fill="#0A0A0A" d="M64,0.3C28.7,0.3,0,28.8,0,64s28.7,63.7,64,63.7c35.3,0,64-28.5,64-63.7S99.3,0.3,64,0.3z M64,121.3
						C32.2,121.3,6.4,95.7,6.4,64C6.4,32.3,32.2,6.7,64,6.7c31.8,0,57.6,25.7,57.6,57.3C121.6,95.7,95.8,121.3,64,121.3z M38.4,58.9
						V66c0,2.2,1.8,3.9,3.9,3.9l15.3-12.2v28.7c0,2.2,2.3,3.2,4.4,3.2H66c2.2,0,3.9-1.8,3.9-3.9V57.2l15.8,12.7
						c2.2,0,3.9-1.8,3.9-3.9v-7.1L64,32.2L38.4,58.9z"/>
				</g>
			</g>
		</g>
	</g>
</svg>
</button>
</React.Fragment>
);
}

export default App;
