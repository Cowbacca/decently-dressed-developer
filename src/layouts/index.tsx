import * as  React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div>
    <div>
      <h1>
        <Link
          to="/"
        >
          The Decently Dressed Developer
        </Link>
      </h1>
    </div>
  </div>
)

interface GatsbyLayoutProps {
  children: () => any
}

const TemplateWrapper = ({children}: GatsbyLayoutProps) => (
  <div>
    <Helmet
      htmlAttributes={{lang: "en"}}
      title="Decently Dressed Developer"
      meta={[
        {charSet: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: 'Cool website for cool people'},
        {name: 'keywords', content: 'cool'}
      ]}
    />
    <Header/>
    <div>
      {children()}
    </div>
  </div>
)

export default TemplateWrapper
