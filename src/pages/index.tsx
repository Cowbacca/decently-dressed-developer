import * as React from 'react'
import Link from 'gatsby-link'
import {IndexQueryQuery} from "../graghql-query-types";
import ArticlePreview from "../components/ArticlePreview";

interface IndexPageProps {
  data: IndexQueryQuery
}

const ARTICLE_PREVIEW_LENGTH = 400

const IndexPage = ({data}: IndexPageProps) => {
  return data.allContentfulArticle.edges.map(
    (edge, index) => (
      <ArticlePreview
        key={index}
        header={
          <h3>{edge.node.title}</h3>
        }
        content={
          <div dangerouslySetInnerHTML={{__html: edge.node.body.childMarkdownRemark.html}}/>
        }
        footer={
          <Link to={`/articles/${edge.node.slug}`}>
            read more
          </Link>
        }
        length={ARTICLE_PREVIEW_LENGTH}
      />
    )
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery{
    allContentfulArticle(sort: {fields: [createdAt], order: DESC}) {
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
