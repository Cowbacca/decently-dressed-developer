import * as React from 'react'
import {ArticleQueryQuery} from "../graghql-query-types";

class ArticleTemplate extends React.Component<{ data: ArticleQueryQuery }> {
  render() {
    const article = this.props.data.contentfulArticle
    return <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{__html: article.body.childMarkdownRemark.html}}/>
    </div>
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query articleQuery($id: String) {
    contentfulArticle(id: {eq: $id}) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
