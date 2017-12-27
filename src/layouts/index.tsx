import * as  React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <header>
    <h1>
      <Link
        to="/"
      >
        The Decently Dressed Developer
      </Link>
    </h1>
    <p>Style means more than just using spaces instead of tabs.</p>
  </header>
)

const Footer = () => (
  <footer style={{'padding-top': '1em'}}>
      <a href="https://www.contentful.com/" rel="nofollow" target="_blank">
        <img
          src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
          style={{
            'max-width': '100px',
            width: '100%'
          }}
          alt="Powered by Contentful"
        />
      </a>
  </footer>
)

interface GatsbyLayoutProps {
  children: () => any
}

const TemplateWrapper = ({children}: GatsbyLayoutProps) => [
  <Helmet
    htmlAttributes={{lang: "en"}}
    title="Decently Dressed Developer"
    meta={[
      {charSet: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Teaching nerds how to dress a little better since 2017.'},
      {
        name: 'keywords',
        content: 'decently,dressed,developer,programming,clothes,menswear,style,fashion,software,development'
      },
      {name: 'google-site-verification', content: 'MpRgP__wtu_V3Ph1xaa-T_92wDzzm1-ygsFzm-9b4dI'},
    ]}
  />,
  <Header/>,
  children(),
  <Footer/>,
]

export default TemplateWrapper
