import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Your favourites' description='Here you can find your favourites.'>
    <FavsWithQuery />
  </Layout>
)
