import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

import { Layout } from '../components/Layout'

export default ({ detailId }) => {
  return (
    <Layout title={`Picture ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
