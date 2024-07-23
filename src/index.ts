import { Hono } from 'hono'
import { XMLParser } from 'fast-xml-parser'

const app = new Hono()

app.get('/', async (c) => {
  const rssUrl = c.req.query('feed_url')
  if (!rssUrl) {
    return c.json({ error: 'feed_url query parameter is required' }, 400)
  }
  const response = await fetch(rssUrl)
  const xmlData = await response.text()
  const parser = new XMLParser()
  const feed = parser.parse(xmlData)
  const firstEntry = feed.rss.channel.item[0]
  return c.json(firstEntry)
})

export default app
