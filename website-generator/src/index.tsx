import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { ssgParams } from 'hono/ssg'
import { Layout } from './pages/layout'
import { HomePage } from "./pages/home"
import { AboutPage } from "./pages/about"
import { EventsPage } from "./pages/events"
import { LocationPage } from "./pages/location"
import { NewsPage } from "./pages/news"
import AnnouncementDetail from "./pages/news/[id]"
import { announcements } from '../public/static/data/announcements'

const app = new Hono()

app.all('*', jsxRenderer(({ children }) => <Layout>{children}</Layout>, {
    docType: '<!DOCTYPE html>'
}))

app.get('/', (c) => c.render(<HomePage />))
app.get('/home', (c) => c.render(<HomePage />))
app.get('/about', (c) => c.render(<AboutPage />))
app.get('/events', (c) => c.render(<EventsPage />))
app.get('/location', (c) => c.render(<LocationPage />))
app.get('/news', (c) => c.render(<NewsPage />))

app.get('/news/:id',
    ssgParams(() => announcements.map((a) => ({ id: a.id }))),
    (c) => {
        const id = c.req.param('id')
        const announcement = announcements.find((a) => a.id === id)
        if (!announcement) return c.notFound()
        return c.render(<AnnouncementDetail id={id} />)
    }
)

export default app
