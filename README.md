# Fiid

This project is a simple RSS feed parser built with Hono and `fast-xml-parser`. It fetches and parses RSS feeds from a given URL.

The name "fiid" is derived from the concept of filtering RSS feeds, emphasizing its functionality to filter and extract specific information from RSS feeds.

## Prerequisites

- Bun

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/kenchan/fiid
    cd fiid
    ```

2. Start the development server:
    ```sh
    bun run dev
    ```

## Usage

1. Start the development server:
    ```sh
    bun run dev
    ```

2. Deploy the application:
    ```sh
    bun run deploy
    ```

## API Endpoint

### Fetch RSS Feed

- **Endpoint:** `/`
- **Method:** `GET`
- **Query Parameters:**
  - `feed_url` (required) - The URL of the RSS feed to fetch and parse.
  - `num` (optional) - The number of entries to return. Default is 1.

#### Example Request

```sh
curl "http://localhost:8787/?feed_url=https://example.com/feed"
```

#### Example Response

```json
[
  {
    "title": "First Article Title",
    "link": "https://example.com/first-article",
    "description": "This is the description of the first article."
  }
]
