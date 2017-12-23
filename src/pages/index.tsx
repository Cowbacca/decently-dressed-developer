import * as React from 'react'
import Link from 'gatsby-link'
import {IndexQueryQuery} from "../graghql-query-types";

interface IndexPageProps {
  data: IndexQueryQuery
}

const IndexPage = ({data}: IndexPageProps) => (
  <div>
    <h1>Welcome!</h1>
    <p>Welcome to the Decently Dressed Developer.</p>
    <p>It ain't the greatest name but it's the one we got.</p>
    <h2>All Articles</h2>
    <ul>
      {data.allContentfulArticle.edges.map(
        edge => (
          <li>
            <Link to={`/articles/${edge.node.slug}`}>
              {edge.node.title}
            </Link>
          </li>
        )
      )}
    </ul>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery{
    allContentfulArticle {
      edges {
        node {
          title
          createdAt
          slug
        }
      }
    }
  }
`
