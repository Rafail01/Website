import {FC} from "hono/jsx"

export const Layout: FC = ({children}) => {
  return (
    <html lang="en">
    <head>
      <title>Leukipos</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
      <link rel="stylesheet" href="static/style.css"/>
    </head>
    <body>
    <header>
      <div className="navbar container">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/location">Location</a></li>
          <li><a href="/news">News</a></li>
        </ul>
      </div>
    </header>
    <section class="section-content">
      <div class="content container">{children}</div>
    </section>
    <section class="section-footer">
      <div className="social-icons">
        <div>
          <i className="fas fa-phone" style="font-size: 30px; color: black;"></i>
          <a href="tel:6944982331" style="text-decoration: none; color: black; margin-left: 10px;">6944982331</a>
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
          <i className="fas fa-envelope" style="font-size: 30px; color: black;"></i>
          <a href="mailto:leukippos.h.o.manis@gmail.com" target="_blank"
             style="text-decoration: none; color: black; margin-left: 10px;">leukippos.h.o.manis@gmail.com</a>
        </div>
      </div>
    </section>
    </body>
    </html>
  )
}