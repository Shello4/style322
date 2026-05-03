import { news } from '../../data/news';
export default function NewsSection(){return <section className="container section"><h2>Новости проекта</h2><div className="grid grid-news">{news.map((n)=><article key={n.title} className="card"><div className="news-image" /><time>{n.date}</time><h3>{n.title}</h3></article>)}</div></section>;}
