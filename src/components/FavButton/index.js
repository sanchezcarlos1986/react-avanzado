import React from 'react'
import { Button, Icon } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  return (
    <Button onClick={() => setLiked(!liked)}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}
