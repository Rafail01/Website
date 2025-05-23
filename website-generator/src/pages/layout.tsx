import {FC} from "hono/jsx"

export const Layout: FC = ({children}) => {
  return (
      <html lang="en">
      <head>
        <title>Λεύκιππος Χορευτικός Όμιλος</title>
        <meta name="keywords" content="Leukipos,Λεύκιππος Χορευτικός Όμιλος,χορός,"/>
        <link rel="icon" type="image/jpeg" href="/static/img/logo_final.jpg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        <link rel="stylesheet" href="/static/style.css"/>
        <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
        <script
            src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            defer
        ></script>
        <script
            src="static/js/location.js"
            defer
        ></script>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery/css/lightgallery.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery/css/lg-zoom.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery/css/lg-thumbnail.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/lightgallery/lightgallery.min.js" defer></script>
          <script src="https://cdn.jsdelivr.net/npm/lightgallery/plugins/zoom/lg-zoom.min.js" defer></script>
          <script src="https://cdn.jsdelivr.net/npm/lightgallery/plugins/thumbnail/lg-thumbnail.min.js" defer></script>
          <script src="static/js/gallery-init.js" defer></script>



      </head>
      <body>
      <header>
        <div className="navbar container">
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="location.html">Location</a></li>
            <li><a href="news.html">News</a></li>
          </ul>
        </div>
      </header>
      <section className="section-content">
        <div className="content container">{children}</div>
      </section>
      <section className="section-footer">
        <div className="social-icons">
          <div>
            <i className="fas fa-phone" style="font-size: 30px; color: black;"></i>
            <a href="tel:6944982331" style="text-decoration: none; color: black; margin-left: 10px;">6944982331</a>
            <a href="tel:6947144443" style="text-decoration: none; color: black; margin-left: 10px;">6947144443</a>
          </div>
          <div>
            <a href="https://www.facebook.com/dim.manimanis" target="_blank">
              <i className="fab fa-facebook-square" style="font-size: 50px;color: black;"></i>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/leukipposkhoreutikos/" target="_blank">
              <i className="fab fa-instagram" style="font-size: 50px;color: black;"></i>
            </a>
          </div>
          <div>
            <a href="mailto:leukippos.h.o.manis@gmail.com" target="_blank"
               style="text-decoration: none; color: black; margin-left: 10px;">
              <i className="fas fa-envelope" style="font-size: 50px; color: black;"></i>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; <a href="https://rafail01.github.io/My-portofolio/" target="_blank" rel="noopener noreferrer">
            Ntymenos Rafail
          </a>
        </div>
      </section>
      </body>
      </html>
  )
}