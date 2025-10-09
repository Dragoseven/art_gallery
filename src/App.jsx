import React, { useState } from 'react';
import LikeIcon from './svg_icons/heart.svg?react';
import DislikeIcon from './svg_icons/brokenHeart.svg?react';
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
	{ imgs: ['American Clown.jpg','16.JPG','17.JPG','18.JPG'], name: 'American Clown', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A colorful and whimsical portrait of an American clown.' },
	{ imgs: ['Gorilla Joy.jpg','19.JPG'], name: 'Gorilla Joy', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A joyful gorilla captured in a moment of happiness.' },
	{ imgs: ['Gorilla with Purse.jpg','13.JPG'], name: 'Gorilla with Purse', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '20" × 30"', desc: 'A humorous portrait of a gorilla holding a purse.' },
	{ imgs: ['Leonardo Dicaprio - Wolf of Wall Street - Cash.jpg','10.JPG'], name: 'Leonardo DiCaprio - Wolf of Wall Street', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Leonardo DiCaprio surrounded by cash from The Wolf of Wall Street.' },
	{ imgs: ['Louie V Raven.jpg','14.JPG'], name: 'Louie V Raven', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '18" × 24"', desc: 'A stylish raven with Louis Vuitton flair.' },
	{ imgs: ['Maple Syrup.jpg','20.JPG'], name: 'Maple Syrup', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '16" × 20"', desc: 'A sweet and delicious depiction of maple syrup.' },
	{ imgs: ['Retired Batman.jpg','15.JPG'], name: 'Retired Batman', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Batman in his later years, retired but still heroic.' },
	
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
	// Like/Dislike state for each art piece
	const [likes, setLikes] = useState(Array(artPieces.length).fill(0));
	const [dislikes, setDislikes] = useState(Array(artPieces.length).fill(0));

	const handleLike = (idx) => {
		setLikes(prev => prev.map((val, i) => i === idx ? val + 1 : val));
	};
	const handleDislike = (idx) => {
		setDislikes(prev => prev.map((val, i) => i === idx ? val + 1 : val));
	};

	React.useEffect(() => {
		const handleScroll = () => {
			setShowTopArrow(window.pageYOffset > 10);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

// Responsive columns: 3 desktop, 2 medium, 1 mobile
	let columns = 3;
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
<div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center', marginRight: '32px' }}>
<button
className="baroque-menu-btn"
title="Menu"
style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
onClick={() => setMenuOpen((open) => !open)}
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
{menuOpen && (
<div className="baroque-menu-dropdown">
<button className="baroque-menu-item" onClick={() => handlePageChange('gallery')}>Home</button>
<button className="baroque-menu-item" onClick={() => handlePageChange('about')}>About</button>
<button className="baroque-menu-item" onClick={() => handlePageChange('contact')}>Contact</button>
<button className="baroque-menu-item" onClick={() => handlePageChange('legal')}>Legal</button>
</div>
)}
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
					{/* Like/Dislike UI */}
					<div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '8px 0 0 0', justifyContent: 'center' }}>
						<button onClick={(e) => { e.stopPropagation(); handleLike(idx); }} title="Like" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
							<LikeIcon style={{ width: 28, height: 28, marginRight: 4, color: 'red' }} />
							<span style={{ fontWeight: 600, color: '#1C274C' }}>{likes[idx]}</span>
						</button>
						<button onClick={(e) => { e.stopPropagation(); handleDislike(idx); }} title="Dislike" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
							<DislikeIcon style={{ width: 28, height: 28, marginRight: 4 }} />
							<span style={{ fontWeight: 600, color: '#1C274C' }}>{dislikes[idx]}</span>
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
{visibleCount < artPieces.length && (
	<div style={{ textAlign: 'center', margin: '32px 0' }}>
		<button
			className="baroque-showmore"
			onClick={() => setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, artPieces.length))}
		>
			Show More
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
{/* Always show the back-to-top arrow */}
<button
className="baroque-top-arrow"
onClick={() => {
// Simple smooth scroll with duration control
const duration = 1000; // 1 second
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
<svg
width="48"
height="48"
viewBox="0 0 48 48"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<circle
cx="24"
cy="24"
r="22"
stroke="#000"
strokeWidth="3"
fill="#000"
/>
<path
d="M24 32 V16"
stroke="#fff"
strokeWidth="3"
strokeLinecap="round"
/>
<path
d="M16 24 L24 16 L32 24"
stroke="#fff"
strokeWidth="3"
strokeLinecap="round"
fill="none"
/>
</svg>
</button>
</React.Fragment>
);
}

export default App;
