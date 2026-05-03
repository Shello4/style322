export default function ServerCard({ server }) {
  const statusClass = server.status === 'online' ? 'status-online' : 'status-match';
  return (
    <article className="card server-card">
      <div className="server-card__top"><h3>{server.mode}</h3><span className={`status ${statusClass}`}>{server.status}</span></div>
      <p className="server-card__name">{server.name}</p>
      <ul>
        <li>Онлайн: {server.players}/{server.maxPlayers}</li>
        <li>Карта: {server.map}</li>
      </ul>
      <button className="btn btn-primary btn-full">Подключиться</button>
      {/* сюда подключается API */}
    </article>
  );
}
