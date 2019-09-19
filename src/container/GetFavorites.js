import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  console.log('data:', data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  const { favs = [] } = data
  return (
    <ListOfFavs favs={favs} />
  )
}

export const FavsWithQuery = () => {
  return <Query query={GET_FAVS} fechPolicy='network-only'>{renderProp}</Query>
}
