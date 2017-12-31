const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({graphql, boundActionCreators}) => {
  const result = await fetchAllArticles(graphql);
  const allArticles = result.data.allContentfulArticle.edges
    .map(edge => ({id: edge.node.id, slug: edge.node.slug}));
  createArticlePages(boundActionCreators, allArticles);
}

async function fetchAllArticles(graphql) {
  const result = await graphql(
    `
        {
          allContentfulArticle(sort: {fields: [createdAt], order: DESC}) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
  )

  if (result.errors) {
    throw Error(result.errors)
  }
  return result;
}

function createArticlePages(boundActionCreators, allArticles) {
  const {createPage} = boundActionCreators
  const articleTemplate = path.resolve(`./src/templates/article.tsx`)

  allArticles
    .forEach((article, index) => {
      const prev = index === allArticles.length - 1 ? undefined : allArticles[index + 1].slug
      const next = index === 0 ? undefined : allArticles[index - 1].slug
      const {id, slug} = article
      createPage({
        path: `/articles/${slug}/`,
        component: slash(articleTemplate),
        context: {
          id,
          prev,
          next
        },
      })
    })
}
