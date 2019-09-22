import React, { Fragment } from 'react'
import { Div, Title, Description } from './styles'

import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, description }) => (
  <Fragment>
    <Helmet>
      { title && <title>{title} | Petgram 🐶</title> }
      { description && <meta name='description' content={description} /> }
    </Helmet>
    <Div>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      {children}
    </Div>
  </Fragment>
)
