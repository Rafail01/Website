import { FC, useEffect, useRef } from 'hono/jsx';
import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

export const AboutPage: FC = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        if (galleryRef.current) {
            lightGallery(galleryRef.current, {
                plugins: [lgThumbnail, lgZoom],
                speed: 500,
                selector: 'a', // targets <a> children inside .photo-gallery
            });
        }
    }, []);

    const images = [
        "/static/img/images_videos/kalamata/kalamata1.jpg",
        "/static/img/images_videos/kalamata/kalamata2.jpg",
        "/static/img/images_videos/kalamata/kalamata3.jpg",
        "/static/img/images_videos/kalamata/kalamata4.jpg",
        "/static/img/images_videos/kalamata/kalamata5.jpg",
        "/static/img/images_videos/kalamata/kalamata6.jpg",
        "/static/img/images_videos/kalamata/kalamata7.jpg",
        "/static/img/images_videos/kalamata/kalamata8.jpg",
        "/static/img/images_videos/kalamata/kalamata9.jpg",
        "/static/img/images_videos/mani/mani1.jpg",
        "/static/img/images_videos/mani/mani2.jpg",
        "/static/img/images_videos/mani/mani3.jpg",
        "/static/img/images_videos/mani/mani4.jpg",
        "/static/img/images_videos/mani/mani5.jpg",
    ];

    return (
        <>
            <h1>Λόγοι για να έρθεις στο Λεύκιππο</h1>
            <div className="list">
                <ul>
                    <li>Σωματική και πνευματική ευεξία</li>
                    <li>Τόνωση της αυτοπεποίθησης</li>
                    <li>Απόκτηση και διατήρηση καλής φυσικής κατάστασης</li>
                    <li>Καλλιεργημένο πνεύμα</li>
                    <li>Σωστή συμπεριφορά</li>
                    <li>Διασκέδαση</li>
                    <li>Κοινωνικές συναναστροφές</li>
                    <li>Συμμετοχή σε συνεστιάσεις</li>
                    <li>Συμμετοχή σε εκδρομές – Θεατρικές παραστάσεις</li>
                    <li>Συμμετοχή σε εκδηλώσεις – παρελάσεις</li>
                    <li>Γνωριμία και εξοικείωση με τους ελληνικούς παραδοσιακούς και λαϊκούς χορούς</li>
                    <li>Σύνδεση με το παρελθόν και τις ελληνικές παραδόσεις</li>
                </ul>
            </div>

            <div className="p1">
                <h1>Τμήματα & Μαθήματα</h1>
                <p>
                    Λειτουργούν τμήματα παιδικά και ενηλίκων για αρχάριους αλλά και πιο έμπειρους χορευτές.
                    Διδάσκονται παραδοσιακοί χοροί από όλη την Ελλάδα, λαϊκοί χοροί, κρητικοί χοροί, και με δυνατότητα ιδιαίτερων μαθημάτων.
                    Στο σύλλογο λειτουργεί και ερασιτεχνική θεατρική ομάδα.
                </p>
            </div>

            <div className="photo-gallery" ref={galleryRef}>
                {images.map((src, index) => (
                    <a key={index} href={src}>
                        <img
                            src={src}
                            alt={`Φωτογραφία ${index + 1}`}
                            style={{ width: "200px", margin: "5px" }}
                        />
                    </a>
                ))}
            </div>
        </>
    );
};
