import { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import ServersPage from './pages/Servers/ServersPage';
import ShopPage from './pages/Shop/ShopPage';
import CasesPage from './pages/Cases/CasesPage';
import ProfilePage from './pages/Profile/ProfilePage';
import NewsPage from './pages/News/NewsPage';
import Footer from './components/Footer/Footer';

const routes = {
  home: HomePage,
  servers: ServersPage,
  shop: ShopPage,
  cases: CasesPage,
  profile: ProfilePage,
  news: NewsPage
};

export default function App() {
  const [route, setRoute] = useState('home');
  const CurrentPage = routes[route] || HomePage;

  return (
    <div className="app-shell">
      <Header currentRoute={route} onNavigate={setRoute} />
      <main>
        <CurrentPage onNavigate={setRoute} />
      </main>
      <Footer />
    </div>
  );
}
