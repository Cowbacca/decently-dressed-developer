import * as React from 'react'
import {truncate} from 'lodash'
import {renderToStaticMarkup} from "react-dom/server";

interface ArticlePreviewProps {
  header: JSX.Element
  content: JSX.Element
  length: number
}

export default class ArticlePreview extends React.PureComponent<ArticlePreviewProps> {
  render() {
    const {header} = this.props
    return (
      <section>
        <header>
          {header}
        </header>
        <p>
          {this.truncatedContent()}
        </p>
      </section>
    )
  }

  truncatedContent = () => {
    const {content, length} = this.props
    const text = textContentFromJsx(content);
    return truncate(text, {length})
  }
}

function textContentFromJsx(jsx: JSX.Element) {
  const div = document.createElement('div');
  div.innerHTML = renderToStaticMarkup(jsx)
  return div.textContent
}
