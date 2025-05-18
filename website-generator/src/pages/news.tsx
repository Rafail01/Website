import { announcements } from '../../public/static/data/announcements';


export const NewsPage = () => (
    <div style={{ padding: '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Ανακοινώσεις</h1>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {announcements.map(({ id, title, date, content }) => (
                <a
                    key={id}
                    // href={`/news/${id}`}
                    style={{
                        display: 'block',
                        textDecoration: 'none',
                        color: "aliceblue",
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '1rem',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        // backgroundColor: 'white',
                    }}
                >
                    <h3>{title}</h3>
                    <small style={{ color: '#888' }}>{date}</small>
                    <p style={{ marginTop: '0.5rem' }}>{content}</p>
                </a>
            ))}
        </div>
    </div>
);
