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
        <div>thlefwno: 6944982331</div>
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
        <div>email: leukippos.h.o.manis@gmail.com</div>
      </div>
    </section>
    </body>
    </html>
  )
}