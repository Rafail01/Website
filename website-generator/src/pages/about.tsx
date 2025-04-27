import {FC} from "hono/jsx";

export const AboutPage: FC = () =>
  <>
    <h1>Λόγοι για να έρθεις στο Λεύκιππο</h1>
    <div className="list">
      <ul2>
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
      </ul2>
    </div>
    <div className="p1">
        <h1>Τμήματα & Μαθήματα</h1>
        <p>Λειτουργούν τμήματα παιδικά και ενηλίκων για αρχάριους αλλά και πιο έμπειρους χορευτές. Διδάσκονται παραδοσιακοί
            χοροί από όλη την Ελλάδα, λαϊκοί χοροί, κρητικοί χοροί, και με δυνατότητα ιδιαίτερων μαθημάτων. Στο σύλλογο
            λειτουργεί και ερασιτεχνική θεατρική ομάδα.
        </p>
    </div>

    <div className="photo-gallery">
      <img src="/static/img/images_videos/kalamata/kalamata1.jpg" alt="Φωτογραφία 1"/>
      <img src="/static/img/images_videos/kalamata/kalamata2.jpg" alt="Φωτογραφία 2"/>
      <img src="/static/img/images_videos/kalamata/kalamata3.jpg" alt="Φωτογραφία 3"/>
      <img src="/static/img/images_videos/kalamata/kalamata4.jpg" alt="Φωτογραφία 4"/>
      <img src="/static/img/images_videos/kalamata/kalamata5.jpg" alt="Φωτογραφία 5"/>
      <img src="/static/img/images_videos/kalamata/kalamata6.jpg" alt="Φωτογραφία 6"/>
      <img src="/static/img/images_videos/kalamata/kalamata7.jpg" alt="Φωτογραφία 7"/>
      <img src="/static/img/images_videos/kalamata/kalamata8.jpg" alt="Φωτογραφία 8"/>
      <img src="/static/img/images_videos/kalamata/kalamata9.jpg" alt="Φωτογραφία 9"/>
      <img src="/static/img/images_videos/mani/mani1.jpg" alt="Φωτογραφία 10"/>
      <img src="/static/img/images_videos/mani/mani2.jpg" alt="Φωτογραφία 11"/>
      <img src="/static/img/images_videos/mani/mani3.jpg" alt="Φωτογραφία 12"/>
      <img src="/static/img/images_videos/mani/mani4.jpg" alt="Φωτογραφία 13"/>
      <img src="/static/img/images_videos/mani/mani5.jpg" alt="Φωτογραφία 14"/>
    </div>
  </>