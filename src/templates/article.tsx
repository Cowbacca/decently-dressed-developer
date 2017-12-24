import * as React from 'react'
import {ArticleQueryQuery} from "../graghql-query-types";

class ArticleTemplate extends React.Component<{ data: ArticleQueryQuery }> {
  render() {
    const article = this.props.data.contentfulArticle
    return <article>
      <header>
        <h1>{article.title}</h1>
      </header>
      <div dangerouslySetInnerHTML={{__html: article.body.childMarkdownRemark.html}}/>
    </article>
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleQuery($id: String) {
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
