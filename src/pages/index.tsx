import * as React from 'react'
import Link from 'gatsby-link'
import {IndexQueryQuery} from "../graghql-query-types";

interface IndexPageProps {
  data: IndexQueryQuery
}

const IndexPage = ({data}: IndexPageProps) => (
  <div>
    <h1>Hi fool</h1>
    <p>Welcome to the Decently Dressed Developer.</p>
    <p>Now go build something great.</p>
    <h2>All Articles</h2>
    <ul>
      {data.allContentfulArticle.edges.map(
        edge => (<li>{edge.node.title}</li>)
      )}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
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
        }
      }
    }
  }
`
