import { Hono } from 'hono'
import { XMLParser } from 'fast-xml-parser'

const app = new Hono()

app.get('/', async (c) => {
  const rssUrl = c.req.query('feed_url')
  if (!rssUrl) {
    return c.json({ error: 'feed_url query parameter is required' }, 400)
  }
  const num = parseInt(c.req.query('num') || '1')
  const response = await fetch(rssUrl)
  const xmlData = await response.text()
  const parser = new XMLParser()
  const feed = parser.parse(xmlData)
  const entries = feed.rss.channel.item.slice(0, num)
  return c.json(entries)
})

export default app
