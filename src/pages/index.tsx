import * as React from 'react'
import Link from 'gatsby-link'
import {IndexQueryQuery} from "../graghql-query-types";

interface IndexPageProps {
  data: IndexQueryQuery
}

const IndexPage = ({data}: IndexPageProps) => [
  <header>
    <p>Style means more than just using spaces instead of tabs.</p>
  </header>,
  <section>
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
  </section>,
]

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
