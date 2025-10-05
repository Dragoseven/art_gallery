import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import './App.css';

const artPieces = [
	{ img: '/art_gallery/American Clown.jpg', name: 'American Clown', artist: 'Unknown', desc: 'A colorful and whimsical portrait of an American clown.' },
	{ img: './public/Anya Taylor-Joy - The Queen\'s Gambit2.jpg', name: "Anya Taylor-Joy - The Queen's Gambit (Alt)", artist: 'Unknown', desc: "Another captivating portrait from The Queen's Gambit series." },
	{ img: './public/Baby Yoda Bill.jpg', name: 'Baby Yoda Bill', artist: 'Unknown', desc: 'An adorable portrait of Baby Yoda.' },
	{ img: './public/Blonde Girl with Goggles2.jpg', name: 'Blonde Girl with Goggles (Alt)', artist: 'Unknown', desc: 'Another perspective of the blonde girl with goggles.' },
	{ img: './public/Brad Pitt.jpg', name: 'Brad Pitt', artist: 'Unknown', desc: 'A captivating portrait of Brad Pitt.' },
	{ img: './public/Cat Stare.jpg', name: 'Cat Stare', artist: 'Unknown', desc: 'An intense and mesmerizing cat stare.' },
	{ img: './public/Color Dash Equestrian.jpg', name: 'Color Dash Equestrian', artist: 'Unknown', desc: 'A vibrant equestrian scene with dashing colors.' },
	{ img: './public/Dead Cyborg Insect.jpg', name: 'Dead Cyborg Insect', artist: 'Unknown', desc: 'A surreal depiction of a dead cyborg insect.' },
	{ img: './public/Gorilla Joy.jpg', name: 'Gorilla Joy', artist: 'Unknown', desc: 'A joyful gorilla captured in a moment of happiness.' },
	{ img: './public/Gorilla with Purse.jpg', name: 'Gorilla with Purse', artist: 'Unknown', desc: 'A humorous portrait of a gorilla holding a purse.' },
	{ img: './public/Jung Ho-yeon - Squid Game.jpg', name: 'Jung Ho-yeon - Squid Game', artist: 'Unknown', desc: 'A powerful portrait of Jung Ho-yeon from Squid Game.' },
	{ img: './public/Leaf Life.jpg', name: 'Leaf Life', artist: 'Unknown', desc: 'A serene depiction of life through the lens of a leaf.' },
	{ img: './public/Leonardo Dicaprio - Wolf of Wall Street - Cash.jpg', name: 'Leonardo DiCaprio - Wolf of Wall Street', artist: 'Unknown', desc: 'Leonardo DiCaprio surrounded by cash from The Wolf of Wall Street.' },
	{ img: './public/Leonardo Dicaprio.jpg', name: 'Leonardo DiCaprio', artist: 'Unknown', desc: 'A classic portrait of Leonardo DiCaprio.' },
	{ img: './public/Louie V Raven.jpg', name: 'Louie V Raven', artist: 'Unknown', desc: 'A stylish raven with Louis Vuitton flair.' },
	{ img: './public/Maple Syrup.jpg', name: 'Maple Syrup', artist: 'Unknown', desc: 'A sweet and delicious depiction of maple syrup.' },
	{ img: './public/Mario Bill.jpg', name: 'Mario Bill', artist: 'Unknown', desc: "A playful portrait of Mario's Bullet Bill." },
	{ img: './public/Marylin Monroe.jpg', name: 'Marilyn Monroe', artist: 'Unknown', desc: 'An iconic portrait of Marilyn Monroe.' },
	{ img: './public/Penguin - Batman2.jpg', name: 'Penguin - Batman (Alt)', artist: 'Unknown', desc: "Another menacing portrait of Batman's Penguin." },
	{ img: './public/Prince.jpg', name: 'Prince', artist: 'Unknown', desc: 'A legendary portrait of the artist Prince.' },
	{ img: './public/Retired Batman.jpg', name: 'Retired Batman', artist: 'Unknown', desc: 'Batman in his later years, retired but still heroic.' },
	{ img: './public/Thoughts - Maksim Sarkysian.jpg', name: 'Thoughts', artist: 'Maksim Sarkysian', desc: 'A contemplative piece titled "Thoughts" by Maksim Sarkysian.' },
	{ img: './public/Zendaya - Dune.jpg', name: 'Zendaya - Dune', artist: 'Unknown', desc: 'A stunning portrait of Zendaya from Dune.' },
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
