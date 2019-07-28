import React from 'react'
import { PhotoCard } from '../PhotoCard'
// import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfPhotoCards = () => (
  <ul>
    {
      categories.map(category => (
        <li key={category.id}>
          <PhotoCard {...category} />
        </li>
      ))
    }
  </ul>
)
