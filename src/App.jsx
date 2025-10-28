import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import About from './About';
import Contact from './Contact';
import Legal from './Legal';
import SignUp from './SignUp';
import Login from './Login';
import './App.css';
import LogoAndTextsvg from './svg_icons/LogoAndTextsvg.svg';

const artPieces = [
	// Acrylic on Canvas
	{ imgs: ['8.JPG'], name: 'Color Dash Equestrian', artist: 'Adriana Codescu', medium: 'Acrylic on Canvas', dimensions: '30" × 40"', desc: 'A vibrant equestrian scene with dashing colors.', publishDate: '2025-10-08' },
	
	// Graphite on Paper
	{ imgs: ['portrait5.JPG'], name: 'Brad Pitt', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A captivating portrait of Brad Pitt.', publishDate: '2025-10-08' },
	{ imgs: ['portrait2.JPG'], name: 'Jung Ho-yeon - Squid Game', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A powerful portrait of Jung Ho-yeon from Squid Game.', publishDate: '2025-10-08' },
	{ imgs: ['portrait4.JPG'], name: 'Leonardo DiCaprio', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A classic portrait of Leonardo DiCaprio.', publishDate: '2025-10-08' },
	{ imgs: ['portrait1.JPG'], name: 'Marilyn Monroe', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'An iconic portrait of Marilyn Monroe.', publishDate: '2025-10-08' },
	{ imgs: ['portrait3.JPG'], name: 'Prince', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A legendary portrait of the artist Prince.', publishDate: '2025-10-08' },
	{ imgs: ['7.JPG'], name: 'Thoughts', artist: 'Maksim Sarkysian', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A contemplative piece titled "Thoughts" by Maksim Sarkysian.', publishDate: '2025-10-08' },
	
	// Oil on Canvas
	{ imgs: ['12.JPG'], name: 'Leaf Life', artist: 'Adriana Codescu', medium: 'Oil on Canvas', dimensions: '16" × 20"', desc: 'A serene depiction of life through the lens of a leaf.', publishDate: '2025-10-08' },
	
	// Oil on Wood Board
	{ imgs: ['16.JPG'], name: 'American Clown', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A colorful and whimsical portrait of an American clown.', publishDate: '2025-10-08' },
	{ imgs: ['19.JPG'], name: 'Gorilla Joy', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A joyful gorilla captured in a moment of happiness.', publishDate: '2025-10-08' },
	{ imgs: ['13.JPG'], name: 'Gorilla with Purse', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '20" × 30"', desc: 'A humorous portrait of a gorilla holding a purse.', publishDate: '2025-10-08' },
	{ imgs: ['10.JPG'], name: 'Leonardo DiCaprio - Wolf of Wall Street', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Leonardo DiCaprio surrounded by cash from The Wolf of Wall Street.', publishDate: '2025-10-08' },
	{ imgs: ['14.JPG'], name: 'Louie V Raven', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '18" × 24"', desc: 'A stylish raven with Louis Vuitton flair.', publishDate: '2025-10-08' },
	{ imgs: ['20.JPG'], name: 'Maple Syrup', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '16" × 20"', desc: 'A sweet and delicious depiction of maple syrup.', publishDate: '2025-10-08' },
	{ imgs: ['15.JPG'], name: 'Retired Batman', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Batman in his later years, retired but still heroic.', publishDate: '2025-10-08' },
	// Newly added paintings (from public/) — using filenames as requested
	{ imgs: ['Chris.jpg'], name: 'Chris', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A moody, intimate portrait of Chris rendered with loose brushstrokes and rich, earthy tones.', publishDate: '2025-10-27' },
	{ imgs: ['Felix.jpg'], name: 'Felix', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A lively, colorful portrait of Felix with energetic brushwork and bold contrasts that emphasize character.', publishDate: '2025-10-27' },
	{ imgs: ['Gwen.jpg'], name: 'Gwen', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A contemplative portrait of Gwen bathed in soft, directional light that highlights delicate facial detail.', publishDate: '2025-10-27' },
	{ imgs: ['Luna Tick.jpg'], name: 'Luna Tick', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A whimsical, moonlit composition that blends lunar motifs with playful textures and subtle surrealism.', publishDate: '2025-10-27' },
	{ imgs: ['Chiainic.jpg'], name: 'Chiainic', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A textured study combining figurative elements with chain-like patterns and layered impasto for tactile depth.', publishDate: '2025-10-27' },
	{ imgs: ['Smoking Priest.jpg'], name: 'Smoking Priest', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A striking portrait of a priest enveloped in cigarette smoke, using atmospheric haze and stark contrasts to create mood.', publishDate: '2025-10-27' },
	
	// Oil on Wood Board, Varnish
	{ imgs: ['11.JPG'], name: 'Cat Stare', artist: 'Alex Petrescu', medium: 'Oil on Wood Board, Varnish', dimensions: '16" × 20"', desc: 'An intense and mesmerizing cat stare.', publishDate: '2025-10-08' },
	
	// Watercolor on Dollar Bill
	{ imgs: ['21.JPG'], name: 'Baby Yoda Bill', artist: 'Alex Petrescu', medium: 'Watercolor on Dollar Bill', dimensions: '18" × 24"', desc: 'An adorable portrait of Baby Yoda.', publishDate: '2025-10-08' },
	{ imgs: ['22.JPG'], name: 'Mario Bill', artist: 'Alex Petrescu', medium: 'Watercolor on Dollar Bill', dimensions: '18" × 24"', desc: "A playful portrait of Mario's Bullet Bill.", publishDate: '2025-10-08' },
	
	// Watercolor on Textured Paper
	{ imgs: ['1.JPG'], name: "Anya Taylor-Joy - The Queen's Gambit", artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '20" × 30"', desc: "Another captivating portrait from The Queen's Gambit series.", publishDate: '2025-10-08' },
	{ imgs: ['2.JPG'], name: 'Blonde Girl with Goggles', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '20" × 30"', desc: 'Another perspective of the blonde girl with goggles.', publishDate: '2025-10-08' },
	{ imgs: ['6.JPG'], name: 'Dead Cyborg Insect', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '18" × 24"', desc: 'A surreal depiction of a dead cyborg insect.', publishDate: '2025-10-08' },
	{ imgs: ['3.JPG'], name: 'Penguin - Batman', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '24" × 36"', desc: "Another menacing portrait of Batman's Penguin.", publishDate: '2025-10-08' },
	{ imgs: ['4.JPG'], name: 'Zendaya - Dune', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '24" × 36"', desc: 'A stunning portrait of Zendaya from Dune.', publishDate: '2025-10-08' },
];


function App() {
	const navigate = useNavigate();
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const [selected, setSelected] = useState(null);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	// Track current image index for each card
	const [cardImageIndexes, setCardImageIndexes] = useState(
		artPieces.map(() => 0)
	);
	// Pagination
	const ITEMS_PER_PAGE = 12;
	const [currentGalleryPage, setCurrentGalleryPage] = useState(() => {
		const raw = parseInt(searchParams.get('page') || '1', 10);
		if (Number.isNaN(raw) || raw < 1) return 1;
		return raw;
	});
	
	// Filter and Sort states
	const [filterMedium, setFilterMedium] = useState('all');
	const [filterArtist, setFilterArtist] = useState('all');
	const [sortBy, setSortBy] = useState('default');

	useEffect(() => {
		const raw = parseInt(searchParams.get('page') || '1', 10);
		const normalized = Number.isNaN(raw) || raw < 1 ? 1 : raw;
		if (normalized !== currentGalleryPage) {
			setCurrentGalleryPage(normalized);
		}
	}, [searchParams, currentGalleryPage]);

	const filteredPieces = useMemo(() => {
		let filtered = artPieces.filter(piece => {
			const mediumMatch = filterMedium === 'all' || piece.medium === filterMedium;
			const artistMatch = filterArtist === 'all' || piece.artist === filterArtist;
			return mediumMatch && artistMatch;
		});

		if (sortBy === 'name-asc') {
			filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortBy === 'name-desc') {
			filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
		} else if (sortBy === 'artist-asc') {
			filtered = [...filtered].sort((a, b) => a.artist.localeCompare(b.artist));
		} else if (sortBy === 'artist-desc') {
			filtered = [...filtered].sort((a, b) => b.artist.localeCompare(a.artist));
		}

		return filtered;
	}, [filterMedium, filterArtist, sortBy]);

	const totalPages = Math.max(1, Math.ceil(filteredPieces.length / ITEMS_PER_PAGE));
	const safePage = Math.min(Math.max(1, currentGalleryPage), totalPages);
	const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
	const currentGalleryItems = filteredPieces.slice(startIndex, startIndex + ITEMS_PER_PAGE);

	useEffect(() => {
		if (safePage !== currentGalleryPage) {
			setCurrentGalleryPage(safePage);
			const params = new URLSearchParams(searchParams);
			params.set('page', safePage.toString());
			setSearchParams(params, { replace: true });
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [safePage]);


// Responsive columns: 4 desktop, 2 medium, 1 mobile
	let columns = 4;
	if (window.innerWidth <= 1200) columns = 2;
	if (window.innerWidth <= 600) columns = 1;

	const pageMap = {
		gallery: '/',
		about: '/about',
		contact: '/contact',
		legal: '/legal',
		signup: '/signup',
		login: '/login'
	};

	const pathToPage = {
		'/about': 'about',
		'/contact': 'contact',
		'/legal': 'legal',
		'/signup': 'signup',
		'/login': 'login'
	};

	const currentPage = pathToPage[location.pathname] || 'gallery';

	const handleViewChange = (page) => {
		navigate(pageMap[page] || '/');
	};

	const handleBackToGallery = () => {
		navigate('/');
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
		if (page < 1 || page > totalPages) return;
		setCurrentGalleryPage(page);
		const params = new URLSearchParams(searchParams);
		params.set('page', page.toString());
		setSearchParams(params, { replace: true });
		window.scrollTo({ top: 0, behavior: 'smooth' });
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
		return <About />;
	}
	if (currentPage === 'contact') {
		return <Contact />;
	}
	if (currentPage === 'legal') {
		return <Legal />;
	}
	if (currentPage === 'signup') {
		return <SignUp />;
	}
	if (currentPage === 'login') {
		return <Login />;
	}

return (
<React.Fragment>
<div className="baroque-bg">
<nav className="baroque-nav">
<div className="baroque-nav-brand" onClick={() => handleViewChange('gallery')} style={{ cursor: 'pointer' }}>
	<img src={LogoAndTextsvg} alt="Art Laundromat Logo" style={{ height: '52px', marginBottom: '4px' }} />
</div>
		<div className="baroque-nav-links">
			<button className="baroque-nav-btn" onClick={() => handleViewChange('gallery')}>Home</button>
			<button className="baroque-nav-btn" onClick={() => handleViewChange('about')}>About</button>
			<button className="baroque-nav-btn" onClick={() => handleViewChange('contact')}>Contact</button>
			<button className="baroque-nav-btn" onClick={() => handleViewChange('legal')}>Legal</button>
		</div>
		<div className="baroque-nav-actions">
			<button className="baroque-auth-btn" onClick={() => handleViewChange('signup')}>Sign Up</button>
			<button className="baroque-auth-btn" onClick={() => handleViewChange('login')}>Log In</button>
		</div>
	</nav>
	
	{/* Filter and Sort Bar with Pagination */}
	<div className="baroque-filter-bar">
		<div className="baroque-filter-section">
			<label htmlFor="medium-filter" className="baroque-filter-label">Medium:</label>
			<select 
				id="medium-filter"
				className="baroque-filter-select"
				value={filterMedium}
				onChange={(e) => setFilterMedium(e.target.value)}
			>
				<option value="all">All Media</option>
				<option value="Acrylic on Canvas">Acrylic on Canvas</option>
				<option value="Graphite on Paper">Graphite on Paper</option>
				<option value="Oil on Canvas">Oil on Canvas</option>
				<option value="Oil on Wood Board">Oil on Wood Board</option>
				<option value="Oil on Wood Board, Varnish">Oil on Wood Board, Varnish</option>
				<option value="Watercolor on Dollar Bill">Watercolor on Dollar Bill</option>
				<option value="Watercolor on Textured Paper">Watercolor on Textured Paper</option>
			</select>
		</div>
		
		<div className="baroque-filter-section">
			<label htmlFor="artist-filter" className="baroque-filter-label">Artist:</label>
			<select 
				id="artist-filter"
				className="baroque-filter-select"
				value={filterArtist}
				onChange={(e) => setFilterArtist(e.target.value)}
			>
				<option value="all">All Artists</option>
				<option value="Alex Petrescu">Alex Petrescu</option>
				<option value="Adriana Codescu">Adriana Codescu</option>
				<option value="Maksim Sarkysian">Maksim Sarkysian</option>
			</select>
		</div>
		
		<div className="baroque-filter-section">
			<label htmlFor="sort-select" className="baroque-filter-label">Sort By:</label>
			<select 
				id="sort-select"
				className="baroque-filter-select"
				value={sortBy}
				onChange={(e) => setSortBy(e.target.value)}
			>
				<option value="default">Default</option>
				<option value="name-asc">Name (A-Z)</option>
				<option value="name-desc">Name (Z-A)</option>
				<option value="artist-asc">Artist (A-Z)</option>
				<option value="artist-desc">Artist (Z-A)</option>
			</select>
		</div>
		
		<button 
			className="baroque-filter-reset"
			onClick={() => {
				setFilterMedium('all');
				setFilterArtist('all');
				setSortBy('default');
			}}
		>
			Reset Filters
		</button>
		
		{/* Top Right Pagination */}
		{totalPages > 1 && (
			<div className="baroque-pagination-top">
				<button 
					className="baroque-pagination-arrow"
					onClick={() => handlePageChange(safePage - 1)}
					disabled={safePage === 1}
					title="Previous page"
				>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<span className="baroque-pagination-info">
					{safePage} / {totalPages}
				</span>
				<button 
					className="baroque-pagination-arrow"
					onClick={() => handlePageChange(safePage + 1)}
					disabled={safePage === totalPages}
					title="Next page"
				>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
		)}
	</div>
	
<section
	className="baroque-gallery"
	style={{
		display: 'grid',
		gridTemplateColumns: `repeat(${columns}, 1fr)`,
		gap: '40px 32px',
	}}
>
		{currentGalleryItems.map((piece, idx) => {
			const originalIndex = (safePage - 1) * ITEMS_PER_PAGE + idx;
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

{/* Bottom Pagination Controls */}
{totalPages > 1 && (
	<div className="baroque-pagination">
		<button 
			className="baroque-pagination-arrow"
			onClick={() => handlePageChange(safePage - 1)}
			disabled={safePage === 1}
			title="Previous page"
		>
			<FontAwesomeIcon icon={faChevronLeft} />
		</button>
		<span className="baroque-pagination-info">
			Page {safePage} of {totalPages}
		</span>
		<button 
			className="baroque-pagination-arrow"
			onClick={() => handlePageChange(safePage + 1)}
			disabled={safePage === totalPages}
			title="Next page"
		>
			<FontAwesomeIcon icon={faChevronRight} />
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
<FooterLink href="#" onClick={(e) => { e.preventDefault(); handleViewChange('about'); }} className="baroque-footer-link">About</FooterLink>
<FooterLink href="#" onClick={(e) => { e.preventDefault(); handleViewChange('contact'); }} className="baroque-footer-link">Contact</FooterLink>
<FooterLink href="#" onClick={(e) => { e.preventDefault(); handleViewChange('legal'); }} className="baroque-footer-link">Legal</FooterLink>
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
		<div className="baroque-slide-panel baroque-slide-panel-wide">
			<button
				className="baroque-close-btn"
				onClick={() => setSelected(null)}
				title="Close"
			>
				&times;
			</button>
			<div className={`baroque-slide-content-row ${isLandscape(artPieces[selected].dimensions) ? 'baroque-slide-content-column' : ''}`}>
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
				<div className="baroque-slide-info-container">
					<div className="baroque-slide-title">{artPieces[selected].name}</div>
					<div className="baroque-slide-desc">{artPieces[selected].desc}</div>
					<div className="baroque-slide-artist">Artist: {artPieces[selected].artist}</div>
					<div className="baroque-slide-medium">Medium: {artPieces[selected].medium}</div>
					<div className="baroque-slide-dimensions">Dimensions: {artPieces[selected].dimensions}</div>
					<div className="baroque-slide-date">Publish Date: {artPieces[selected].publishDate}</div>
				</div>
			</div>
		</div>
	</React.Fragment>
)}
</div>
</React.Fragment>
);
}

export default App;
