import React from 'react'
import { Link, Grid, Image } from './styles'

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