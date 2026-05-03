import { servers } from '../../data/servers';
import ServerCard from '../ServerCard/ServerCard';

export default function ServersSection() {
  return <section className="container section"><h2>Серверы ZEHO CS</h2><div className="grid grid-servers">{servers.map((s) => <ServerCard key={s.name} server={s} />)}</div></section>;
}
