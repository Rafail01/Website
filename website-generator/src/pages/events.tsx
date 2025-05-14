import { FC } from 'hono/jsx';

export const EventsPage :FC = () => {

    const images = [
        "static/img/images_videos/events/imageEvent1.jpg",
        "static/img/images_videos/events/imageEvent2.jpg",
        "static/img/images_videos/events/imageEvent3.jpg",
        "static/img/images_videos/events/imageEvent4.jpg",
        "static/img/images_videos/events/imageEvent5.jpg",
        "static/img/images_videos/events/imageEvent6.jpeg",
        "static/img/images_videos/events/imageEvent7.jpeg",
        "static/img/images_videos/events/imageEvent8.jpeg",
        "static/img/images_videos/events/imageEvent9.jpeg",
        "static/img/images_videos/events/imageEvent10.jpeg",
        "static/img/images_videos/events/imageEvent11.jpeg",
        "static/img/images_videos/events/imageEvent12.jpeg",
        "static/img/images_videos/events/imageEvent13.jpeg",
        "static/img/images_videos/events/imageEvent14.jpeg",
        "static/img/images_videos/events/imageEvent15.jpeg",
    ];

    return (
        <>
            <h1>EVENTS – TRIPS – FESTIVALS – TV SHOWS</h1>
            <div className="p1">
                <p>
                    Ο σύλλογός μας μετέχει σε πολλά φεστιβάλ παραδοσιακών χορών στην Ελλάδα αλλά και στο εξωτερικό.
                    Κάθε χρόνο έχει ένα πλούσιο πρόγραμμα εκδηλώσεων, ενώ παράλληλα έχει λάβει μέρος σε πολλές
                    τηλεοπτικές
                    εκπομπές τοπικής και πανελλήνιας εμβέλειας, οι οποίες έχουν ως σκοπό την προβολή και την ανάδειξη
                    της
                    παραδοσιακής μουσικοχορευτικής μας κληρονομιάς.
                </p>
            </div>

            <div className="p1">
                <p>
                    Συχνά οργανώνει εκδρομές, συνεστιάσεις και μετέχει σε πολιτιστικά δρώμενα των δήμων Καλαμάτας και
                    δυτικής Μάνης, όπου και δραστηριοποιείται. Παράλληλα, ο σύλλογος έχει να αναδείξει παραστάσεις από
                    την
                    ερασιτεχνική του θεατρική ομάδα και τη χορωδία παραδοσιακής μουσικής.
                </p>
            </div>

            <div className="photo-gallery" id="lightgallery">
                {images.map((src, index) => (
                    <a key={index} href={src}>
                        <img
                            src={src}
                            // alt={` ${index + 1}`}
                            style={{ width: "200px", margin: "5px" }}
                        />
                    </a>
                ))}
            </div>
        </>
    );
};