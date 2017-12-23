import * as  React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
        >
          Gatsby
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
      title="Gatsby Default Starter"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <Header/>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

export default TemplateWrapper
