import Hero from '../../components/Hero/Hero';
import ServersSection from '../../components/ServersSection/ServersSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import CasesSection from '../../components/CasesSection/CasesSection';
import NewsSection from '../../components/NewsSection/NewsSection';

export default function HomePage({ onNavigate }) {
  return <><Hero onNavigate={onNavigate} /><ServersSection /><FeaturesSection /><CasesSection /><NewsSection /></>;
}
