import * as React from 'react'
import {ArticleQueryQuery} from '../graghql-query-types'
import {Link} from 'react-router-dom'
import ArticleFooter from '../components/ArticleFooter'

class ArticleTemplate extends React.Component<{ data: ArticleQueryQuery, pathContext: { prev?: string, next?: string } }> {
  render() {
    const article = this.props.data.contentfulArticle
    const {prev, next} = this.props.pathContext
    return <article>
      <header>
        <h1>{article.title}</h1>
      </header>
      <div dangerouslySetInnerHTML={{__html: article.body.childMarkdownRemark.html}}/>
      <ArticleFooter>
        {prev && <Link to={`/articles/${this.props.pathContext.prev}`}>previous</Link>}
        <Link to="/">home</Link>
        {next && <Link to={`/articles/${this.props.pathContext.next}`}>next</Link>}
      </ArticleFooter>
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
