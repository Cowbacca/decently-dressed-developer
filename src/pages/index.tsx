import * as React from 'react'
import Link from 'gatsby-link'
import {IndexQueryQuery} from "../graghql-query-types";
import ArticlePreview from "../components/ArticlePreview";

interface IndexPageProps {
  data: IndexQueryQuery
}

const ARTICLE_PREVIEW_LENGTH = 120

const IndexPage = ({data}: IndexPageProps) => (
  <section>
    <h2>All Articles</h2>
    <ul>
      {data.allContentfulArticle.edges.map(
        (edge, index) => (
          <li>
            <ArticlePreview
              key={index}
              header={
                <Link to={`/articles/${edge.node.slug}`}>
                  {edge.node.title}
                </Link>
              }
              content={
                <div dangerouslySetInnerHTML={{__html: edge.node.body.childMarkdownRemark.html}}/>
              }
              length={ARTICLE_PREVIEW_LENGTH}
            />
          </li>
        )
      )}
    </ul>
  </section>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery{
    allContentfulArticle {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
