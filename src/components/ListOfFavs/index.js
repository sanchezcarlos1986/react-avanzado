import React from 'react'
import { Link, Grid, Image } from './styles'
import PropTypes from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => (
  <Grid>
    {
      !favs.length && <strong>You don't have favourites yet</strong>
    }
    {favs.map(fav => (
      <Link key={fav.id} to={`/detail/${fav.id}`}>
        <Image src={fav.src} />
      </Link>
    ))}
  </Grid>
)

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.number,
      userId: PropTypes.string,
      src: PropTypes.string,
      likes: PropTypes.number
    })
  )
}
