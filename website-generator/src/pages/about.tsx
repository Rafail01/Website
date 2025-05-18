import { FC } from 'hono/jsx';

export const AboutPage: FC = () => {
    const images = [
        "static/img/images_videos/kalamata/kalamata1.jpg",
        "static/img/images_videos/kalamata/kalamata2.jpg",
        "static/img/images_videos/kalamata/kalamata3.jpg",
        "static/img/images_videos/kalamata/kalamata4.jpg",
        "static/img/images_videos/kalamata/kalamata5.jpg",
        "static/img/images_videos/kalamata/kalamata6.jpg",
        "static/img/images_videos/kalamata/kalamata7.jpg",
        "static/img/images_videos/kalamata/kalamata8.jpg",
        "static/img/images_videos/kalamata/kalamata9.jpg",
        "static/img/images_videos/mani/mani1.jpg",
        "static/img/images_videos/mani/mani2.jpg",
        "static/img/images_videos/mani/mani3.jpg",
        "static/img/images_videos/mani/mani4.jpg",
        "static/img/images_videos/mani/mani5.jpg",
    ];

    // const videos = [
    //     "static/img/images_videos/videos/videoEvent1.mp4",
    //     "static/img/images_videos/videos/videoEvent2.mp4",
    //     "static/img/images_videos/videos/videoEvent3.mp4",
    //     "static/img/images_videos/videos/videoEvent4.mp4",
    //     "static/img/images_videos/videos/videoEvent5.mp4",
    //     "static/img/images_videos/videos/videoEvent6.mp4",
    //     "static/img/images_videos/videos/videoEvent7.mp4",
    //     "static/img/images_videos/videos/videoEvent8.mp4",
    //     "static/img/images_videos/videos/videoEvent9.mp4",
    // ];

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
            {/*<div className="photo-gallery" id="lightgallery">*/}
            {/*    {videos.map((src, index) => (*/}
            {/*        <a key={index} href={src}>*/}
            {/*            <video*/}
            {/*                src={src}*/}
            {/*                // alt={` ${index + 1}`}*/}
            {/*                style={{ width: "200px", margin: "5px" }}*/}
            {/*            />*/}
            {/*        </a>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </>
    );
};
