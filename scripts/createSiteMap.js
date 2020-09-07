const fs = require('fs')
const { SitemapStream, streamToPromise } = require('sitemap')
const fetch = require('isomorphic-unfetch')

const createSiteMapFile = async () => {
  const smStream = new SitemapStream({
    hostname: 'https://yanceyleo.com',
  })

  const query = `
    query Posts($input: PaginationInput!) {
      posts(input: $input) {
        items {
          _id
          lastModifiedDate
        }
      }
    }
  `

  const res = await fetch('https://api.yanceyleo.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { input: { page: 1, pageSize: 1000 } },
    }),
  })

  const data = await res.json()

  data.data.posts.items.forEach((post) => {
    smStream.write({
      url: `/post/${post._id}`,
      lastmod: post.lastModifiedDate,
    })
  })

  smStream.end()

  const sitemapBuffer = await streamToPromise(smStream)
  const sitemap = sitemapBuffer.toString()

  fs.writeFileSync('public/sitemap-article-index.xml', sitemap)
}

createSiteMapFile()
