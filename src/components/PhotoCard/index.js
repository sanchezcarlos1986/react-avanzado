import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import PropTypes from 'prop-types'

import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0, liked }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {show && <Fragment>
        <Link to={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} alt='ble' />
          </ImgWrapper>
        </Link>
        <ToggleLikeMutation>
          {
            (toggleLike) => {
              const handleFavClick = () => toggleLike({ variables: { input: { id } } })
              return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
            }
          }
        </ToggleLikeMutation>
      </Fragment>}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  likes: (props, propName, componentName) => {
    const propValue = props[propName]

    if (propValue === undefined) return new Error(`${propValue} value must be defined`)
    if (propValue < 0) return new Error(`${propValue} value must be greater than 0`)
  },
  liked: PropTypes.bool
}
