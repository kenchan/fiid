import { Hono } from 'hono'
import { XMLParser } from 'fast-xml-parser'

const app = new Hono()

app.get('/', async (c) => {
  const rssUrl = 'https://kenchan.github.io/diary.rss'
  const response = await fetch(rssUrl)
  const xmlData = await response.text()
  const parser = new XMLParser()
  const feed = parser.parse(xmlData)
  const firstEntry = feed.rss.channel.item[0]
  return c.json(firstEntry)
})

export default app
