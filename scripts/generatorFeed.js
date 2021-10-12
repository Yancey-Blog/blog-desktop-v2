const fs = require('fs')
const { Feed } = require('feed')
const fetch = require('isomorphic-unfetch')

const generatorFeed = async () => {
  const feed = new Feed({
    title: 'Yancey Blog',
    description: 'The Feed for Yancey Blog',
    id: 'https://yanceyleo.com/',
    link: 'https://yanceyleo.com/',
    language: 'en',
    image: 'https://edge.yancey.app/beg/logo512.png',
    favicon: 'https://yanceyleo.com/favicon.ico',
    copyright: 'Copyright (c) 2021 Yancey Inc. and its affiliates.',
    date: new Date(),
    generator: 'Yancey Inc.',
    author: {
      name: 'Yancey Leo',
      email: 'yanceyofficial@gmail.com',
      link: 'https://yanceyleo.com/',
    },
  })

  const query = `
    query Posts($input: PaginationInput!) {
      posts(input: $input) {
        items {
          _id
          lastModifiedDate
          title
          content
          summary
          posterUrl
          tags
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

  const json = await res.json()

  json.data.posts.items.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post._id,
      link: `https://yanceyleo.com/post/${post._id}`,
      description: post.summary,
      // content: post.content,
      author: [
        {
          name: 'Yancey Leo',
          email: 'yanceyofficial@gmail.com',
          link: 'https://yanceyleo.com/',
        },
      ],
      contributor: [
        {
          name: 'Yancey Leo',
          email: 'yanceyofficial@gmail.com',
          link: 'https://yanceyleo.com/',
        },
      ],
      date: new Date(post.lastModifiedDate),
      image: post.posterUrl,
    })
  })

  feed.addCategory('Technologie')

  feed.addContributor({
    name: 'Yancey Leo',
    email: 'yanceyofficial@gmail.com',
    link: 'https://yanceyleo.com/',
  })

  fs.writeFileSync('public/rss.xml', feed.rss2())
  fs.writeFileSync('public/atom.xml', feed.atom1())
}

generatorFeed()
