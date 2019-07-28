import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'

export const App = () => (
  <Fragment>
    <GlobalStyle />
    <ListOfCategories />
  </Fragment>
)
