import React, { useState } from 'react';
import './App.css';

const artPieces = [
	{
		img: 'https://api.nga.gov/iiif/2fac6801-cfcd-463c-b6e3-5ebf5d124cbe/full/950,/0/default.jpg',
		name: 'Baroque Couple',
		artist: 'Unknown',
		desc: 'A dramatic depiction of two figures, their gestures and expressions capturing the emotional intensity of the Baroque era.',
	},
	{
		img: 'https://api.nga.gov/iiif/3b398f2e-ba99-4455-b55f-824e39f849f5/full/950,/0/default.jpg',
		name: 'Bacchus and Ariadne',
		artist: 'Unknown',
		desc: 'Bacchus and Ariadne are surrounded by playful putti and vibrant colors, celebrating myth and festivity.',
	},
	{
		img: 'https://api.nga.gov/iiif/5cd44527-980f-490b-9c57-a1fe0858a04a/full/950,/0/default.jpg',
		name: 'Ivory Statue',
		artist: 'Unknown',
		desc: 'A masterfully carved ivory statue, its delicate features and pose evoke both strength and vulnerability.',
	},
	{
		img: 'https://api.nga.gov/iiif/1457b3af-e3f5-41d1-a96f-40b110a0157b/full/950,/0/default.jpg',
		name: 'Marble Bust',
		artist: 'Unknown',
		desc: 'This marble bust displays the refined craftsmanship and attention to detail typical of Baroque sculpture.',
	},
	{
		img: 'https://api.nga.gov/iiif/b43cb1f3-cf38-4a59-ac3c-b8e8db2acb9b/full/950,/0/default.jpg',
		name: 'Woman and Soldiers',
		artist: 'Unknown',
		desc: 'A commanding female figure addresses a group of soldiers, her presence both regal and inspiring.',
	},
	{
		img: 'https://api.nga.gov/iiif/555e69b1-fcf2-420b-8f00-d856e04c188f/0,1184,12698,8471/!1280,854/0/default.jpg',
		name: 'Portrait of Woman',
		artist: 'L. Vigée Le Brun',
		desc: 'A luminous portrait, the sitter adorned in elegant attire and surrounded by soft, atmospheric light.',
	},
	{
		img: 'https://api.nga.gov/iiif/1b266771-5762-4ce0-8968-688cae2ba81e/0,0,3864,2578/!1280,854/0/default.jpg',
		name: 'Kneeling Angel',
		artist: 'Unknown',
		desc: 'A golden angel kneels in reverence, its wings and robe rendered in exquisite detail.',
	},
	{
		img: 'https://api.nga.gov/iiif/1457b3af-e3f5-41d1-a96f-40b110a0157b/0,0,4056,3927/!950,920/0/default.jpg',
		name: 'Marble Bust (Alt)',
		artist: 'Unknown',
		desc: 'Another view of a marble bust, highlighting the sculptor’s skill in capturing human expression.',
	},
	{
		img: 'https://api.nga.gov/iiif/3b398f2e-ba99-4455-b55f-824e39f849f5/full/950,/0/default.jpg',
		name: 'Bacchus and Ariadne (Alt)',
		artist: 'Unknown',
		desc: 'A festive scene with Bacchus and Ariadne, filled with movement and vibrant colors.',
	},
];

function App() {
	const [showTopArrow, setShowTopArrow] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setShowTopArrow(window.pageYOffset > 10);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const [selected, setSelected] = useState(null);

	// Responsive columns: 3 desktop, 2 medium, 1 mobile
	let columns = 3;
	if (window.innerWidth <= 900) columns = 2;
	if (window.innerWidth <= 600) columns = 1;

	return (
		<React.Fragment>
			<div className="baroque-bg">
				<nav className="baroque-nav">
					<div className="baroque-nav-brand">
						<div className="baroque-nav-title">Unfunny Art Gallery</div>
					</div>
					<button
						className="baroque-menu-btn"
						title="Menu"
						style={{position: 'absolute', top: 16, right: 24, background: 'none', border: 'none', cursor: 'pointer', padding: 0}}
						onClick={() => setMenuOpen((open) => !open)}
					>
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="7" width="32" height="3" rx="1.5" fill="#e6e0d1" />
							<rect y="14" width="32" height="3" rx="1.5" fill="#e6e0d1" />
							<rect y="21" width="32" height="3" rx="1.5" fill="#e6e0d1" />
						</svg>
					</button>
					{menuOpen && (
						<div className="baroque-menu-dropdown">
							<button className="baroque-menu-item" onClick={() => {setMenuOpen(false); window.location.href = '/';}}>Home</button>
							<button className="baroque-menu-item" onClick={() => {setMenuOpen(false); alert('About: This is a simple art gallery web app.');}}>About</button>
							<button className="baroque-menu-item" onClick={() => {setMenuOpen(false); alert('Contact: Email dragos@example.com');}}>Contact</button>
							<button className="baroque-menu-item" onClick={() => {setMenuOpen(false); alert('Legal: All rights reserved.');}}>Legal</button>
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
					{artPieces.map((piece, idx) => (
						<React.Fragment key={idx}>
							<div
								className="baroque-card"
								onClick={() => setSelected(idx)}
								style={{ cursor: 'pointer' }}
							>
								<img
									src={piece.img}
									alt={piece.name}
									className="baroque-img"
								/>
								<div className="baroque-info">
									<div className="baroque-name">{piece.name}</div>
									<div className="baroque-artist">{piece.artist}</div>
								</div>
							</div>
						</React.Fragment>
					))}
				</section>
				<footer className="baroque-footer">
					<div className="baroque-footer-content">
						<div className="baroque-footer-date">
							{new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()}
						</div>
						<div className="baroque-footer-copyright">
							© {new Date().getFullYear()} Dragos Petrescu. All rights reserved.
						</div>
					</div>
				</footer>
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
							<div className="baroque-slide-img-container">
								<img
									className="baroque-slide-img"
									src={artPieces[selected].img}
									alt={artPieces[selected].name}
								/>
							</div>
							<div className="baroque-slide-title">
								{artPieces[selected].name}
							</div>
							<div className="baroque-slide-desc">
								{artPieces[selected].desc}
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
