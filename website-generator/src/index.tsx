import {Hono} from 'hono'
import {ssgParams} from 'hono/ssg'
import {jsxRenderer} from 'hono/jsx-renderer'
import {Layout} from './pages/layout'
import {HomePage} from "./pages/home";
import {AboutPage} from "./pages/about";
import {EventsPage} from "./pages/events";
import {LocationPage} from "./pages/location";
import {NewsPage} from "./pages/news";
import AnnouncementDetail from "./pages/news/[id]";
import {announcements} from "../public/static/data/announcements";

const app = new Hono()

app.all(
  '*',
  jsxRenderer(({children}) => <Layout>{children}</Layout>, {docType: '<!DOCTYPE html>'})
)

app.get('/', (c) =>
  c.render(<HomePage />))

app.get('/home', (c) =>
    c.render(<HomePage />))

app.get('/about', (c) =>
  c.render(<AboutPage />))

app.get('/events', (c) =>
  c.render(<EventsPage />))

app.get('/location', (c) => c.render(
  <LocationPage />))

app.get('/news', (c) =>
  c.render(<NewsPage />))

app.get('/news/:id', (c) => {
    const id = c.req.param('id')
    const announcement = announcements.find((a) => a.id === id)
    if (!announcement) {
        return c.notFound()
    }
    return c.render(<AnnouncementDetail id={id} />)
})


// type Post = {
//   id: string
// }
//
// const posts: Post[] = [{id: 'hello'}, {id: 'morning'}, {id: 'night'}]
//
// app.get('/posts', (c) => {
//   return c.render(
//     <ul>
//       {posts.map((post) => {
//         return (
//           <li>
//             <a href={`/posts/${post.id}`}>{post.id}</a>
//           </li>
//         )
//       })}
//     </ul>
//   )
// })
//
// app.get(
//   '/posts/:id',
//   ssgParams(() => posts),
//   (c) => {
//     return c.render(<h1>{c.req.param('id')}</h1>)
//   }
// )
//
// app.get('/status', ssgParams(false), (c) => c.json({ok: true}))
//
// app.get('/404', (c) => c.notFound())

export default app