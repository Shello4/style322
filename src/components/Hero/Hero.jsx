export default function Hero({ onNavigate }) {
  return (
    <section className="hero container">
      <p className="hero__badge">Zenda’s House / ZEHO CS</p>
      <h1>Премиальная экосистема серверов Counter-Strike 2</h1>
      <p>Соревнуйся, прокачивай ранг, открывай кейсы и играй в стабильной инфраструктуре нового поколения.</p>
      <div className="hero__actions">
        <button className="btn btn-primary">Играть сейчас</button>
        <button className="btn btn-secondary" onClick={() => onNavigate('servers')}>Смотреть серверы</button>
      </div>
    </section>
  );
}
