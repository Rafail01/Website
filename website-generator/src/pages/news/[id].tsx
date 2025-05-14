import { announcements } from '../../data/announcements';

type Props = {
    id: string;
};

// export function getStaticPaths() {
//     return announcements.map((a) => ({ id: a.id }));
// }

export default function AnnouncementDetail({ id }: Props) {
    const announcement = announcements.find((a) => a.id === id);
    if (!announcement) return <div>Ανακοίνωση δεν βρέθηκε.</div>;

    return (
        <>
            <h1>{announcement.title}</h1>
            <small>{announcement.date}</small>
            <div className="p1">
                {announcement.fullContent.map((paragraph, index) => (
                    (index ===3 || index==6) ? (
                        <p key={index} style={{ marginTop: '1rem', color:"burlywood" }}><strong>{paragraph}</strong></p>
                    ) : (
                        <p key={index} style={{ marginTop: '1rem' }}>{paragraph}</p>
                    )
                ))}
            </div>
        </>
    );
}