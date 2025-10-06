import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import './App.css';

const artPieces = [
	// Acrylic on Canvas
	{ img: 'Color Dash Equestrian.jpg', name: 'Color Dash Equestrian', artist: 'Adriana Codescu', medium: 'Acrylic on Canvas', dimensions: '30" × 40"', desc: 'A vibrant equestrian scene with dashing colors.' },
	
	// Graphite on Paper
	{ img: 'Brad Pitt.jpg', name: 'Brad Pitt', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A captivating portrait of Brad Pitt.' },
	{ img: 'Jung Ho-yeon - Squid Game.jpg', name: 'Jung Ho-yeon - Squid Game', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A powerful portrait of Jung Ho-yeon from Squid Game.' },
	{ img: 'Leonardo Dicaprio.jpg', name: 'Leonardo DiCaprio', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A classic portrait of Leonardo DiCaprio.' },
	{ img: 'Marylin Monroe.jpg', name: 'Marilyn Monroe', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'An iconic portrait of Marilyn Monroe.' },
	{ img: 'Prince.jpg', name: 'Prince', artist: 'Alex Petrescu', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A legendary portrait of the artist Prince.' },
	{ img: 'Thoughts - Maksim Sarkysian.jpg', name: 'Thoughts', artist: 'Maksim Sarkysian', medium: 'Graphite on Paper', dimensions: '16"H × 12"W', desc: 'A contemplative piece titled "Thoughts" by Maksim Sarkysian.' },
	
	// Oil on Canvas
	{ img: 'Leaf Life.jpg', name: 'Leaf Life', artist: 'Adriana Codescu', medium: 'Oil on Canvas', dimensions: '16" × 20"', desc: 'A serene depiction of life through the lens of a leaf.' },
	
	// Oil on Wood Board
	{ img: 'American Clown.jpg', name: 'American Clown', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A colorful and whimsical portrait of an American clown.' },
	{ img: 'Gorilla Joy.jpg', name: 'Gorilla Joy', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'A joyful gorilla captured in a moment of happiness.' },
	{ img: 'Gorilla with Purse.jpg', name: 'Gorilla with Purse', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '20" × 30"', desc: 'A humorous portrait of a gorilla holding a purse.' },
	{ img: 'Leonardo Dicaprio - Wolf of Wall Street - Cash.jpg', name: 'Leonardo DiCaprio - Wolf of Wall Street', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Leonardo DiCaprio surrounded by cash from The Wolf of Wall Street.' },
	{ img: 'Louie V Raven.jpg', name: 'Louie V Raven', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '18" × 24"', desc: 'A stylish raven with Louis Vuitton flair.' },
	{ img: 'Maple Syrup.jpg', name: 'Maple Syrup', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '16" × 20"', desc: 'A sweet and delicious depiction of maple syrup.' },
	{ img: 'Retired Batman.jpg', name: 'Retired Batman', artist: 'Alex Petrescu', medium: 'Oil on Wood Board', dimensions: '24" × 36"', desc: 'Batman in his later years, retired but still heroic.' },
	
	// Oil on Wood Board, Varnish
	{ img: 'Cat Stare.jpg', name: 'Cat Stare', artist: 'Alex Petrescu', medium: 'Oil on Wood Board, Varnish', dimensions: '16" × 20"', desc: 'An intense and mesmerizing cat stare.' },
	
	// Watercolor on Dollar Bill
	{ img: 'Baby Yoda Bill.jpg', name: 'Baby Yoda Bill', artist: 'Alex Petrescu', medium: 'Watercolor on Dollar Bill', dimensions: '18" × 24"', desc: 'An adorable portrait of Baby Yoda.' },
	{ img: 'Mario Bill.jpg', name: 'Mario Bill', artist: 'Alex Petrescu', medium: 'Watercolor on Dollar Bill', dimensions: '18" × 24"', desc: "A playful portrait of Mario's Bullet Bill." },
	
	// Watercolor on Textured Paper
	{ img: 'Anya Taylor-Joy - The Queen\'s Gambit2.jpg', name: "Anya Taylor-Joy - The Queen's Gambit", artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '20" × 30"', desc: "Another captivating portrait from The Queen's Gambit series." },
	{ img: 'Blonde Girl with Goggles2.jpg', name: 'Blonde Girl with Goggles', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '20" × 30"', desc: 'Another perspective of the blonde girl with goggles.' },
	{ img: 'Dead Cyborg Insect.jpg', name: 'Dead Cyborg Insect', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '18" × 24"', desc: 'A surreal depiction of a dead cyborg insect.' },
	{ img: 'Penguin - Batman2.jpg', name: 'Penguin - Batman', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '24" × 36"', desc: "Another menacing portrait of Batman's Penguin." },
	{ img: 'Zendaya - Dune.jpg', name: 'Zendaya - Dune', artist: 'Alex Petrescu', medium: 'Watercolor on Textured Paper', dimensions: '24" × 36"', desc: 'A stunning portrait of Zendaya from Dune.' },
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
<div className="baroque-nav-title">Art Laundromat</div>
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
<Footer container className="baroque-footer-custom">
<div className="w-full">
<div className="w-full baroque-footer-top">
<FooterBrand
href="/"
name="Art Laundromat"
className="baroque-footer-brand"
/>
<FooterLinkGroup className="baroque-footer-links">
<FooterLink href="#" onClick={(e) => { e.preventDefault(); alert('About: This is a simple art gallery web app.'); }} className="baroque-footer-link">About</FooterLink>
<FooterLink href="#" onClick={(e) => { e.preventDefault(); alert('Privacy Policy'); }} className="baroque-footer-link">Privacy Policy</FooterLink>
<FooterLink href="#" onClick={(e) => { e.preventDefault(); alert('Legal: All rights reserved.'); }} className="baroque-footer-link">Licensing</FooterLink>
<FooterLink href="#" onClick={(e) => { e.preventDefault(); alert('Contact: Email dragos@example.com'); }} className="baroque-footer-link">Contact</FooterLink>
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
