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
          allContentfulArticle{
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
    .forEach(article => {
      const {id, slug} = article
      createPage({
        path: `/articles/${slug}/`,
        component: slash(articleTemplate),
        context: {
          id,
        },
      })
    })
}
