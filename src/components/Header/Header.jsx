import { useState } from 'react';

const menu = [
  { key: 'home', label: 'Главная' },
  { key: 'servers', label: 'Серверы' },
  { key: 'shop', label: 'Магазин' },
  { key: 'cases', label: 'Кейсы' },
  { key: 'profile', label: 'Ранги' },
  { key: 'news', label: 'Новости' }
];

export default function Header({ currentRoute, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <button className="logo-btn" onClick={() => onNavigate('home')}>
          <img src="/assets/logo.png" alt="ZEHO CS" className="logo" />
        </button>

        <nav className="nav desktop-nav">
          {menu.map((item) => (
            <button key={item.key} className={`nav__item ${currentRoute === item.key ? 'is-active' : ''}`} onClick={() => onNavigate(item.key)}>
              {item.label}
            </button>
          ))}
        </nav>

        <button className="steam-btn">Войти через Steam</button>
        {/* сюда Steam auth */}

        <button className="burger" onClick={() => setOpen(!open)} aria-label="Меню">
          <span /> <span /> <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {menu.map((item) => (
          <button key={item.key} className={`mobile-menu__item ${currentRoute === item.key ? 'is-active' : ''}`} onClick={() => { onNavigate(item.key); setOpen(false); }}>
            {item.label}
          </button>
        ))}
        <button className="steam-btn mobile">Войти через Steam</button>
      </div>
    </header>
  );
}
