import React, { memo } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

import { Layout } from '../components/Layout'

export const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Your pet photo app' description='With Petgram you can find photos of very beautiful pets'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export default memo(HomePage, (prevProps, props) => (prevProps.categoryId === props.categoryId))
