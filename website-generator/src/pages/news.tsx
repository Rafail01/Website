import React from 'react';

const announcements = [
    { id: 1, title: 'Ανακοίνωση 1', date: '2025-05-01', content: 'Λεπτομέρειες για την ανακοίνωση 1.' },
    { id: 2, title: 'Ανακοίνωση 2', date: '2025-05-03', content: 'Λεπτομέρειες για την ανακοίνωση 2.' },
    { id: 3, title: 'Ανακοίνωση 3', date: '2025-05-05', content: 'Λεπτομέρειες για την ανακοίνωση 3.' },
    { id: 4, title: 'Ανακοίνωση 4', date: '2025-05-05', content: 'Λεπτομέρειες για την ανακοίνωση 4.' },
    { id: 5, title: 'Ανακοίνωση 5', date: '2025-05-05', content: 'Λεπτομέρειες για την ανακοίνωση 5.' },
];

export const NewsPage = () => (
    <div style={{ padding: '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Ανακοινώσεις</h1>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {announcements.map(({ id, title, date, content }) => (
                <div
                    key={id}
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '1rem',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        backgroundColor: 'white',
                    }}
                >
                    <h3>{title}</h3>
                    <small style={{ color: '#888' }}>{date}</small>
                    <p style={{ marginTop: '0.5rem' }}>{content}</p>
                </div>
            ))}
        </div>
    </div>
);
