import * as React from 'react'
import {truncate} from 'lodash'
import {renderToStaticMarkup} from 'react-dom/server'
import {Parser} from 'htmlparser2'

interface ArticlePreviewProps {
  header: JSX.Element
  content: JSX.Element
  footer: JSX.Element
  length: number
}

export default class ArticlePreview extends React.PureComponent<ArticlePreviewProps> {
  render() {
    const {header, footer} = this.props
    return (
      <article>
        <header>
          {header}
        </header>
        <p>
          {this.truncatedContent()}
        </p>
        <footer>
          {footer}
        </footer>
      </article>
    )
  }

  truncatedContent = () => {
    const {content, length} = this.props
    const text = textContentFromJsx(content);
    return truncate(text, {length})
  }
}

function textContentFromJsx(jsx: JSX.Element) {
  const htmlString = renderToStaticMarkup(jsx)
  return allTextContentFromHtmlString(htmlString)
}

function allTextContentFromHtmlString(htmlString: string) {
  let allText = ''

  const htmlParser = new Parser({
    ontext: text => {
      allText += text
    }
  })

  htmlParser.parseComplete(htmlString)

  return allText
}
