import { announcements } from '../../data/announcements';

type Props = {
    id: string;
};

export function getStaticPaths() {
    return announcements.map((a) => ({ id: a.id }));
}

export default function AnnouncementDetail({ id }: Props) {
    const announcement = announcements.find((a) => a.id === id);
    if (!announcement) return <div>Ανακοίνωση δεν βρέθηκε.</div>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>{announcement.title}</h1>
            <small>{announcement.date}</small>
            <p style={{ marginTop: '1rem' }}>{announcement.fullContent}</p>
        </div>
    );
}